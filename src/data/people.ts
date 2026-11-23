// Co-author profile links, used to link names in author lists (Publications, CV, home).
// Keys are full names; initial forms such as "H. Houston" are matched automatically.
// TODO(user): add links for other co-authors you want linked.
const collaboratorLinks: Record<string, string> = {
  "Alice Gabriel": "https://www.alicegabriel.com/",
  "Sylvain Barbot": "https://sites.google.com/view/quakephysics/home",
  "Heidi Houston": "https://www.researchgate.net/profile/Heidi-Houston",
  "Hiroko Kitajima": "https://artsci.tamu.edu/geology-geophysics/contact/profiles/hiroko-kitajima.html",
  "Mingqi Liu": "https://scholar.google.com/citations?user=kEc2UMgAAAAJ&hl=en",
  "Baoning Wu": "https://sites.google.com/ucr.edu/baoningwu",
  "Yijian Zhou": "https://yijianzhou.github.io"
};

const selfNames = new Set(["Binhao Wang", "B. Wang"]);

const initialForm = (fullName: string) => {
  const parts = fullName.split(" ");
  return parts[0][0] + ". " + parts.slice(1).join(" ");
};

const linkByName = new Map<string, string>();
for (const [name, url] of Object.entries(collaboratorLinks)) {
  linkByName.set(name, url);
  linkByName.set(initialForm(name), url);
}

export const isSelf = (name: string) => selfNames.has(name);
export const coauthorLink = (name: string) => linkByName.get(name);
