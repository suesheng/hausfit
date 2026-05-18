/** @typedef {import('@astrojs/sitemap').SitemapItem} SitemapItem */

const CITY_PATHS = new Set([
  "/einsatzgebiet/duesseldorf",
  "/einsatzgebiet/koeln",
  "/einsatzgebiet/essen",
  "/einsatzgebiet/dortmund",
  "/einsatzgebiet/duisburg",
  "/einsatzgebiet/bochum",
  "/einsatzgebiet/solingen",
  "/einsatzgebiet/wuppertal",
]);

const LEGAL_PATHS = new Set([
  "/datenschutz",
  "/impressum",
  "/cookie-richtlinie",
]);

const CORE_PATHS = new Set(["/kontakt", "/referenzen", "/ueber-uns", "/faq"]);

const SERVICE_PAGE = /^\/leistungen\/[^/]+-nrw$/;

/**
 * @param {string} url
 * @returns {string}
 */
export function pathnameFromSitemapUrl(url) {
  const pathname = new URL(url).pathname;
  if (pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

/**
 * @param {string} pathname
 * @returns {number | undefined}
 */
export function priorityForPath(pathname) {
  if (pathname === "/") return 1.0;
  if (LEGAL_PATHS.has(pathname)) return 0.1;
  if (SERVICE_PAGE.test(pathname)) return 0.8;
  if (CITY_PATHS.has(pathname)) return 0.7;
  if (CORE_PATHS.has(pathname)) return 0.6;
  return undefined;
}

/**
 * @param {SitemapItem} item
 * @returns {SitemapItem}
 */
export function applySitemapPriority(item) {
  const priority = priorityForPath(pathnameFromSitemapUrl(item.url));
  if (priority !== undefined) {
    item.priority = priority;
  }
  return item;
}
