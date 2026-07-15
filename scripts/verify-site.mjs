import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(entryPath) : Promise.resolve([entryPath]);
    })
  );
  return paths.flat();
}

function addError(message) {
  errors.push(message);
}

function localTargetCandidates(href) {
  const pathname = decodeURIComponent(href.split("#")[0].split("?")[0]);
  const relative = pathname.replace(/^\//, "");

  if (!relative) {
    return [path.join(dist, "index.html")];
  }

  return [
    path.join(dist, relative),
    path.join(dist, relative, "index.html"),
    path.join(dist, relative + ".html")
  ];
}

function isExternal(value) {
  return /^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(value);
}

async function exists(candidate) {
  return stat(candidate).then((candidateStat) => candidateStat.isFile()).catch(() => false);
}

const files = await walk(dist).catch(() => {
  addError("No dist directory found. Run the Astro build before the site checks.");
  return [];
});

const htmlFiles = files.filter((file) => file.endsWith(".html"));

if (htmlFiles.length === 0) {
  addError("No rendered HTML files found in dist.");
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const pageName = path.relative(dist, file);

  if (!/^<!doctype html>/i.test(html)) {
    addError(pageName + " is missing an HTML doctype.");
  }
  if (!/<html[^>]+lang="en"/i.test(html)) {
    addError(pageName + " is missing lang=en.");
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) {
    addError(pageName + " is missing a usable title.");
  }
  if (!/<meta[^>]+name="description"/i.test(html)) {
    addError(pageName + " is missing a meta description.");
  }
  if (!/<main[^>]+id="main-content"/i.test(html)) {
    addError(pageName + " is missing the main content landmark.");
  }
  if (!/<a[^>]+class="skip-link"/i.test(html)) {
    addError(pageName + " is missing the skip link.");
  }

  const headingCount = [...html.matchAll(/<h1(?:\s[^>]*)?>/gi)].length;
  if (headingCount !== 1) {
    addError(pageName + " must contain exactly one h1. Found " + headingCount + ".");
  }

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=(?:"[^"]*"|'[^']*')/i.test(image[0])) {
      addError(pageName + " contains an image without alt text.");
    }
  }

  const attributes = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)].map((match) => match[1]);
  for (const value of attributes) {
    if (isExternal(value)) {
      continue;
    }

    const candidates = localTargetCandidates(value);
    const found = await Promise.any(
      candidates.map(async (candidate) => {
        if (await exists(candidate)) {
          return candidate;
        }
        throw new Error("not found");
      })
    ).catch(() => undefined);

    if (!found) {
      addError(pageName + " links to a missing local asset: " + value);
    }
  }

  for (const link of html.matchAll(/href="([^"]*#[^"]+)"/gi)) {
    const [href] = link.slice(1);
    if (isExternal(href)) {
      continue;
    }
    const [pathname, fragment] = href.split("#");
    const candidates = localTargetCandidates(pathname || "/");
    const target = await Promise.any(
      candidates.map(async (candidate) => {
        if (await exists(candidate)) {
          return candidate;
        }
        throw new Error("not found");
      })
    ).catch(() => undefined);

    if (!target) {
      continue;
    }

    const targetHtml = await readFile(target, "utf8").catch(() => "");
    const escapedFragment = fragment.replace(/[.*+?^$()|[\]{}\\]/g, "\\$&");
    if (!new RegExp('id="' + escapedFragment + '"').test(targetHtml)) {
      addError(pageName + " links to a missing anchor: " + href);
    }
  }
}

const jsFiles = files.filter((file) => file.endsWith(".js"));
const jsBytes = (
  await Promise.all(jsFiles.map((file) => stat(file).then((fileStat) => fileStat.size)))
).reduce((total, size) => total + size, 0);

if (jsBytes > 150 * 1024) {
  addError("Client JavaScript exceeds the 150 KB static-site budget.");
}

const oversized = await Promise.all(
  files.map(async (file) => ({ file, size: (await stat(file)).size }))
);
for (const file of oversized) {
  if (file.size > 1024 * 1024) {
    addError(path.relative(dist, file.file) + " exceeds the 1 MB asset budget.");
  }
}

if (errors.length > 0) {
  console.error("Static site quality checks failed:");
  for (const error of errors) {
    console.error(" - " + error);
  }
  process.exit(1);
}

console.log(
  "Static site quality checks passed: " +
    htmlFiles.length +
    " pages, " +
    jsBytes +
    " bytes of client JavaScript."
);
