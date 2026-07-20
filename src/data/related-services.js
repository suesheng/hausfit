/** @typedef {{ metaSlug: string; imageSlug: string; name: string; description: string; href: string }} RelatedService */

/** @type {RelatedService[]} */
export const serviceCatalog = [
  {
    metaSlug: "badsanierung-nrw",
    imageSlug: "badsanierung",
    name: "Badsanierung",
    description: "Komplettbad mit Abdichtung, Fliesen und Sanitär – aus einer Hand.",
    href: "/leistungen/badsanierung-nrw"
  },
  {
    metaSlug: "trockenbau-nrw",
    imageSlug: "trockenbau",
    name: "Trockenbau",
    description: "Wände, Decken und Raumaufteilung präzise und staubarm.",
    href: "/leistungen/trockenbau-nrw"
  },
  {
    metaSlug: "dachausbau-nrw",
    imageSlug: "dachausbau",
    name: "Dachausbau",
    description: "Dachraum nutzbar machen – von Statik bis Innenausbau.",
    href: "/leistungen/dachausbau-nrw"
  },
  {
    metaSlug: "generalunternehmer-nrw",
    imageSlug: "generalunternehmer",
    name: "Kernsanierung",
    description: "Komplettsanierung mit allen Gewerken und einem Ansprechpartner.",
    href: "/leistungen/generalunternehmer-nrw"
  },
  {
    metaSlug: "fassadendaemmung-nrw",
    imageSlug: "fassadendaemmung",
    name: "Fassadenrenovierung",
    description: "Fassade sanieren, dämmen und wetterfest abschließen.",
    href: "/leistungen/fassadendaemmung-nrw"
  },
  {
    metaSlug: "bodenleger-nrw",
    imageSlug: "bodenverlegung",
    name: "Bodenbeläge",
    description: "Vinyl, Laminat und Designböden fachgerecht verlegt.",
    href: "/leistungen/bodenleger-nrw"
  },
  {
    metaSlug: "malerarbeiten-nrw",
    imageSlug: "malerarbeiten",
    name: "Malerarbeiten",
    description: "Innenräume und Fassaden sauber grundiert und gestrichen.",
    href: "/leistungen/malerarbeiten-nrw"
  },
  {
    metaSlug: "fenster-tueren-montage-nrw",
    imageSlug: "fenster-tueren",
    name: "Elektroinstallation",
    description: "Elektro, Installation und Anschlüsse im Sanierungsablauf koordiniert.",
    href: "/leistungen/fenster-tueren-montage-nrw"
  },
  {
    metaSlug: "fliesenleger-nrw",
    imageSlug: "fliesenarbeiten",
    name: "Fliesenarbeiten",
    description: "Wand- und Bodenfliesen präzise verlegt in Bad und Wohnräumen.",
    href: "/leistungen/fliesenleger-nrw"
  },
  {
    metaSlug: "schimmelbeseitigung-nrw",
    imageSlug: "schimmelbeseitigung",
    name: "Schimmelbeseitigung",
    description: "Ursache klären, befallene Flächen sanieren und trocknen.",
    href: "/leistungen/schimmelbeseitigung-nrw"
  },
  {
    metaSlug: "asbestbeseitigung-nrw",
    imageSlug: "asbestbeseitigung",
    name: "Asbestbeseitigung",
    description: "Asbesthaltige Bauteile nach Vorgaben sicher zurückbauen.",
    href: "/leistungen/asbestbeseitigung-nrw"
  },
  {
    metaSlug: "klimaanlagen-installation-nrw",
    imageSlug: "klimaanlagen",
    name: "Klimaanlagen",
    description: "Split-Klimageräte baulich vorbereiten – Koordination mit zertifiziertem Kälte-Klima-Fachbetrieb.",
    href: "/leistungen/klimaanlagen-installation-nrw"
  }
];

/** Wärmedämmung / Heizungsmodernisierung → energetische Leistungsseiten (kein eigener Slug). */
/** @type {RelatedService} */
export const waermedaemmungCard = {
  metaSlug: "fassadendaemmung-nrw",
  imageSlug: "fassadendaemmung",
  name: "Wärmedämmung",
  description: "Gebäudehülle dämmen und Heizkosten senken – inkl. Beratung zu Förderungen.",
  href: "/leistungen/fassadendaemmung-nrw"
};

/** @type {RelatedService} */
export const heizungsmodernisierungCard = {
  metaSlug: "fenster-tueren-montage-nrw",
  imageSlug: "fenster-tueren",
  name: "Heizungsmodernisierung",
  description: "Energetische Modernisierung mit Fenstertausch und gedämmter Hülle.",
  href: "/leistungen/fenster-tueren-montage-nrw"
};

/** @type {Record<string, (string | RelatedService)[]>} */
const relatedByMetaSlug = {
  "badsanierung-nrw": ["fliesenleger-nrw", "bodenleger-nrw", "schimmelbeseitigung-nrw"],
  "trockenbau-nrw": ["malerarbeiten-nrw", "bodenleger-nrw", "generalunternehmer-nrw"],
  "fliesenleger-nrw": ["badsanierung-nrw", "bodenleger-nrw", "malerarbeiten-nrw"],
  "bodenleger-nrw": ["fliesenleger-nrw", "malerarbeiten-nrw", "trockenbau-nrw"],
  "malerarbeiten-nrw": ["trockenbau-nrw", waermedaemmungCard, "bodenleger-nrw"],
  "dachausbau-nrw": ["trockenbau-nrw", heizungsmodernisierungCard, "generalunternehmer-nrw"],
  "fenster-tueren-montage-nrw": [waermedaemmungCard, "dachausbau-nrw", "generalunternehmer-nrw"],
  "fassadendaemmung-nrw": [heizungsmodernisierungCard, "malerarbeiten-nrw", "generalunternehmer-nrw"],
  "schimmelbeseitigung-nrw": ["badsanierung-nrw", "trockenbau-nrw", "malerarbeiten-nrw"],
  "asbestbeseitigung-nrw": ["trockenbau-nrw", waermedaemmungCard, "generalunternehmer-nrw"],
  "generalunternehmer-nrw": ["badsanierung-nrw", "dachausbau-nrw", waermedaemmungCard],
  "klimaanlagen-installation-nrw": ["fassadendaemmung-nrw", "fenster-tueren-montage-nrw", "generalunternehmer-nrw"],
  "renovierung-duesseldorf": ["generalunternehmer-nrw", "malerarbeiten-nrw", "bodenleger-nrw"],
  "schachtsanierung-duesseldorf": ["generalunternehmer-nrw", "trockenbau-nrw", "asbestbeseitigung-nrw"],
  "wandsanierung-duesseldorf": ["malerarbeiten-nrw", "trockenbau-nrw", "schimmelbeseitigung-nrw"]
};

const catalogBySlug = Object.fromEntries(serviceCatalog.map((entry) => [entry.metaSlug, entry]));

/**
 * @param {string | RelatedService} ref
 * @returns {RelatedService}
 */
function resolveRelated(ref) {
  if (typeof ref === "string") {
    const entry = catalogBySlug[ref];
    if (!entry) {
      throw new Error(`Related service catalog entry missing for: ${ref}`);
    }
    return entry;
  }
  return ref;
}

/**
 * @param {string} currentMetaSlug
 * @returns {RelatedService[]}
 */
export function getRelatedServices(currentMetaSlug) {
  const refs = relatedByMetaSlug[currentMetaSlug];
  if (!refs) {
    throw new Error(`Related services not configured for: ${currentMetaSlug}`);
  }

  return refs.map(resolveRelated).filter((entry) => entry.metaSlug !== currentMetaSlug);
}
