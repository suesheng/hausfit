/** @type {Record<string, string>} */
export const serviceImageAlt = {
  badsanierung: "Badsanierung NRW - Komplette Badumbauten von HausFit",
  trockenbau: "Trockenbau NRW - Professioneller Innenausbau von HausFit",
  fliesenarbeiten: "Fliesenarbeiten NRW - Präzise Wand- und Bodenfliesen von HausFit",
  bodenverlegung: "Bodenverlegung NRW - Fachgerechte Bodenbeläge von HausFit",
  malerarbeiten: "Malerarbeiten NRW - Saubere Innen- und Fassadenanstriche von HausFit",
  dachausbau: "Dachausbau NRW - Nutzbare Dachgeschoss-Ausbauten von HausFit",
  "fenster-tueren": "Fenster NRW - Luftdichte Fenster- und Türmontage von HausFit",
  fassadendaemmung: "Fassadendämmung NRW - Energieeffiziente Fassadensanierung von HausFit",
  schimmelbeseitigung: "Schimmelbeseitigung NRW - Fachgerechte Schimmelsanierung von HausFit",
  asbestbeseitigung: "Asbestbeseitigung NRW - Sichere Asbestbeseitigung von HausFit",
  generalunternehmer: "Sanierung NRW - Komplettsanierung aus einer Hand von HausFit"
};

/** @type {Record<string, string>} */
export const cityImageAlt = {
  duesseldorf: "Sanierung NRW - Handwerker in Düsseldorf von HausFit",
  koeln: "Sanierung NRW - Handwerker in Köln von HausFit",
  essen: "Sanierung NRW - Handwerker in Essen von HausFit",
  dortmund: "Sanierung NRW - Handwerker in Dortmund von HausFit",
  duisburg: "Sanierung NRW - Handwerker in Duisburg von HausFit",
  bochum: "Sanierung NRW - Handwerker in Bochum von HausFit",
  solingen: "Sanierung NRW - Handwerker in Solingen von HausFit",
  wuppertal: "Sanierung NRW - Handwerker in Wuppertal von HausFit",
  default: "Sanierung NRW - Einsatzgebiet Nordrhein-Westfalen von HausFit"
};

/** @type {Record<string, string>} */
export const projectImageAlt = {
  projekt1: "Badsanierung NRW - Fertiges Bad nach Komplettumbau von HausFit",
  projekt2: "Trockenbau NRW - Trockenbauwände und Decken von HausFit",
  projekt3: "Dachausbau NRW - Ausgebautes Dachgeschoss von HausFit",
  projekt4: "Fliesenarbeiten NRW - Verlegte Wand- und Bodenfliesen von HausFit",
  projekt5: "Schimmelbeseitigung NRW - Sanierte Wandflächen von HausFit",
  projekt: "Sanierung NRW - Referenzprojekt von HausFit"
};

/**
 * @param {string} slug
 * @returns {string}
 */
export function getServiceImageAlt(slug) {
  return serviceImageAlt[slug] ?? `Sanierung NRW - Leistung ${slug} von HausFit`;
}

/**
 * @param {string} cityKey
 * @returns {string}
 */
export function getCityImageAlt(cityKey) {
  return cityImageAlt[cityKey] ?? cityImageAlt.default;
}

/**
 * @param {string} imageSlug
 * @returns {string}
 */
export function getProjectImageAlt(imageSlug) {
  return projectImageAlt[imageSlug] ?? projectImageAlt.projekt;
}
