import { cities, einsatzgebietCityLinks } from "./cities.js";
import { serviceCombos, services } from "./services.js";

/** @type {Record<string, string>} */
export const serviceListSlugToComboKey = {
  badsanierung: "badsanierung",
  trockenbau: "trockenbau",
  fliesenarbeiten: "fliesenleger",
  bodenverlegung: "bodenleger",
  malerarbeiten: "malerarbeiten",
  dachausbau: "dachausbau",
  "fenster-tueren": "fenstertueren",
  fassadendaemmung: "fassadendaemmung",
  schimmelbeseitigung: "schimmelbeseitigung",
  asbestbeseitigung: "asbestbeseitigung",
  generalunternehmer: "generalunternehmer",
  klimaanlagen: "klimaanlagen"
};

/**
 * @param {string} comboKey
 * @param {string} cityKey
 * @returns {string}
 */
export function getComboUrl(comboKey, cityKey) {
  return `/${comboKey}-${cityKey}`;
}

/**
 * @param {string} serviceName
 * @param {string} cityName
 * @returns {string}
 */
export function getServiceCityAnchor(serviceName, cityName) {
  return `${serviceName} in ${cityName}`;
}

/**
 * @param {string} metaSlug e.g. badsanierung-nrw
 * @returns {string | undefined}
 */
export function comboKeyFromMetaSlug(metaSlug) {
  for (const [key, data] of Object.entries(serviceCombos)) {
    if (data.nrwUrl === `/leistungen/${metaSlug}`) {
      return key;
    }
  }
  return undefined;
}

/**
 * @param {string} comboKey
 * @param {string} serviceName
 * @returns {{ href: string; label: string }[]}
 */
export function getCityLinksForService(comboKey, serviceName) {
  return einsatzgebietCityLinks.map((city) => {
    const cityKey = city.href.replace("/einsatzgebiet/", "");
    return {
      href: getComboUrl(comboKey, cityKey),
      label: getServiceCityAnchor(serviceName, city.name)
    };
  });
}

/**
 * @param {string} cityKey
 * @param {string} cityName
 * @returns {{ href: string; label: string }[]}
 */
export function getServiceLinksForCity(cityKey, cityName) {
  return services.map((service) => {
    const comboKey = serviceListSlugToComboKey[service.slug];
    if (!comboKey) {
      throw new Error(`Missing combo key mapping for service slug: ${service.slug}`);
    }
    return {
      href: getComboUrl(comboKey, cityKey),
      label: getServiceCityAnchor(service.name, cityName)
    };
  });
}

/** @type {string[]} */
export const comboCityKeys = Object.keys(cities);
