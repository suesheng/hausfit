export const services = [
  { name: "Badsanierung", slug: "badsanierung" },
  { name: "Trockenbau", slug: "trockenbau" },
  { name: "Fliesenarbeiten", slug: "fliesenarbeiten" },
  { name: "Bodenverlegung", slug: "bodenverlegung" },
  { name: "Malerarbeiten", slug: "malerarbeiten" },
  { name: "Dachausbau", slug: "dachausbau" },
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
  dachausbau: "/leistungen/dachausbau-nrw",
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
  },
  bodenleger: {
    name: "Bodenverlegung",
    slug: "bodenleger",
    description: "Böden fachgerecht verlegt und auf Nutzung abgestimmt.",
    nrwUrl: "/leistungen/bodenleger-nrw",
    leistungen: ["Untergrund prüfen", "Material und Verlegeplan", "Verlegung", "Übergänge und Abschlüsse", "Abnahme mit Pflegehinweisen"]
  },
  malerarbeiten: {
    name: "Malerarbeiten",
    slug: "malerarbeiten",
    description: "Innenräume und Fassaden sauber vorbereitet und gestrichen.",
    nrwUrl: "/leistungen/malerarbeiten-nrw",
    leistungen: ["Oberflächenanalyse", "Untergrundvorbereitung", "Grundierung", "Deckanstriche", "Feinarbeit und Übergabe"]
  },
  dachausbau: {
    name: "Dachausbau",
    slug: "dachausbau",
    description: "Dachraum und Aufbauten strukturiert realisieren.",
    nrwUrl: "/leistungen/dachausbau-nrw",
    leistungen: ["Bestandsaufnahme", "Nutzungskonzept", "Dach und Anschlüsse", "Koordination der Gewerke", "Abnahme"]
  },
  fenstertueren: {
    name: "Fenster und Türen",
    slug: "fenster-tueren",
    description: "Montage und Austausch passgenau und luftdicht.",
    nrwUrl: "/leistungen/fenster-tueren-montage-nrw",
    leistungen: ["Aufmaß und Auswahl", "Demontage", "Montage", "Abdichtung und Anschlüsse", "Funktionsprüfung"]
  },
  fassadendaemmung: {
    name: "Fassadendämmung",
    slug: "fassadendaemmung",
    description: "Fassade dämmen und vor Witterung schützen.",
    nrwUrl: "/leistungen/fassadendaemmung-nrw",
    leistungen: ["Bestandsanalyse", "Systemwahl", "Untergrund und Anschlüsse", "Ausführung", "Abnahme"]
  },
  schimmelbeseitigung: {
    name: "Schimmelbeseitigung",
    slug: "schimmelbeseitigung",
    description: "Ursachen klären und Schimmel fachgerecht beseitigen.",
    nrwUrl: "/leistungen/schimmelbeseitigung-nrw",
    leistungen: ["Befund und Ursachenanalyse", "Schutzkonzept", "Entfernung befallener Bereiche", "Trocknung und Sanierung", "Nachkontrolle"]
  },
  asbestbeseitigung: {
    name: "Asbestbeseitigung",
    slug: "asbestbeseitigung",
    description: "Asbesthaltige Materialien nach Vorgaben sicher zurückbauen.",
    nrwUrl: "/leistungen/asbestbeseitigung-nrw",
    leistungen: ["Proben und Bewertung", "Schutz- und Arbeitsplan", "Fachgerechter Rückbau", "Entsorgung", "Dokumentation"]
  },
  generalunternehmer: {
    name: "Generalunternehmer",
    slug: "generalunternehmer",
    description: "Sanierung und Ausbau zentral geplant und umgesetzt.",
    nrwUrl: "/leistungen/generalunternehmer-nrw",
    leistungen: ["Projektdefinition", "Gewerke koordinieren", "Termine und Qualität", "Kommunikation mit Auftraggebern", "Abnahme"]
  }
};
