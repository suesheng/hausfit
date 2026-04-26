export const services = [
  { name: "Badsanierung", slug: "badsanierung" },
  { name: "Trockenbau", slug: "trockenbau" },
  { name: "Fliesenarbeiten", slug: "fliesenarbeiten" },
  { name: "Bodenverlegung", slug: "bodenverlegung" },
  { name: "Malerarbeiten", slug: "malerarbeiten" },
  { name: "Dachsanierung", slug: "dachsanierung" },
  { name: "Fenster & Türen", slug: "fenster-tueren" },
  { name: "Fassadendämmung", slug: "fassadendaemmung" },
  { name: "Schimmelbeseitigung", slug: "schimmelbeseitigung" },
  { name: "Asbestbeseitigung", slug: "asbestbeseitigung" },
  { name: "Generalunternehmer", slug: "generalunternehmer" }
];

export const serviceUrlBySlug = /** @type {Record<string, string>} */ ({
  badsanierung: "/leistungen/badsanierung-nrw",
  trockenbau: "/leistungen/trockenbau-nrw",
  fliesenarbeiten: "/leistungen/fliesenleger-nrw",
  bodenverlegung: "/leistungen/bodenleger-nrw",
  malerarbeiten: "/leistungen/malerarbeiten-nrw",
  dachsanierung: "/leistungen/dachsanierung-nrw",
  "fenster-tueren": "/leistungen/fenster-tueren-montage-nrw",
  fassadendaemmung: "/leistungen/fassadendaemmung-nrw",
  schimmelbeseitigung: "/leistungen/schimmelbeseitigung-nrw",
  asbestbeseitigung: "/leistungen/asbestbeseitigung-nrw",
  generalunternehmer: "/leistungen/generalunternehmer-nrw"
});

export const serviceCombos = {
  badsanierung: {
    name: "Badsanierung",
    slug: "badsanierung",
    description: "Komplettbad aus einer Hand.",
    nrwUrl: "/leistungen/badsanierung-nrw",
    leistungen: ["Planung", "Demontage", "Installation", "Fliesenarbeiten", "Endmontage"]
  },
  trockenbau: {
    name: "Trockenbau",
    slug: "trockenbau",
    description: "Wände und Decken.",
    nrwUrl: "/leistungen/trockenbau-nrw",
    leistungen: ["Planung", "Demontage", "Unterkonstruktion", "Beplankung", "Endmontage"]
  },
  fliesenleger: {
    name: "Fliesenarbeiten",
    slug: "fliesenleger",
    description: "Präzise Verlegung von Wand- und Bodenfliesen.",
    nrwUrl: "/leistungen/fliesenleger-nrw",
    leistungen: ["Planung", "Demontage", "Untergrundvorbereitung", "Fliesenarbeiten", "Endmontage"]
  }
};
