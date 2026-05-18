/** @typedef {import("../../components/RatgeberArticle.astro").RatgeberSection} RatgeberSection */

/** @type {{ title: string; description: string; breadcrumbLabel: string; h1: string; intro: string; asideTitle: string; asideText: string; asideCtaLabel: string; faqSchema: Record<string, unknown>; sections: RatgeberSection[] }} */
export const dachausbauKostenRatgeber = {
  title: "Dachausbau Kosten NRW 2026 ✓ Planung & Richtpreise | HausFit",
  description:
    "Dachausbau Kosten in NRW 2026: Richtwerte pro m², Statik, Dämmung und Innenausbau. Planungstipps für Düsseldorf, Köln, Dortmund – Festpreis vom Fachbetrieb HausFit.",
  breadcrumbLabel: "Dachausbau Kosten",
  h1: "Dachausbau: Kosten und Planung in NRW 2026",
  intro:
    "Ein ausgebautes Dachgeschoss ist eine der effizientsten Möglichkeiten, Wohnfläche zu gewinnen – ohne Grundstückskauf. In Nordrhein-Westfalen liegen die Kosten 2026 stark vom Dachtyp, der gewünschten Nutzung und dem baulichen Zustand ab. Dieser Ratgeber zeigt realistische Richtpreise, Planungsschritte und typische Fallstricke.",
  asideTitle: "Dachprojekt unverbindlich kalkulieren",
  asideText:
    "Skizze, Fotos vom Dachstuhl und Nutzungswunsch reichen für die Ersteinschätzung. Wir melden uns mit einem strukturierten Angebot – Erstberatung kostenlos.",
  asideCtaLabel: "Kostenloses Angebot anfragen",
  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet ein Dachausbau in NRW 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für einen vollständigen Ausbau mit Dämmung, Fenstern und Innenausbau liegen Richtwerte in NRW 2026 oft zwischen 900 und 1.600 Euro pro Quadratmeter Nutzfläche. Einfache Ausbauten unterhalb der Kniestiefe starten teils ab 600 Euro pro m², hochwertige Lösungen mit Bad und Estrich können darüber liegen."
        }
      },
      {
        "@type": "Question",
        name: "Brauche ich eine Baugenehmigung für den Dachausbau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ob genehmigungspflichtig, hängt von Nutzung, Statik, neuen Fenstern und dem jeweiligen Bebauungsplan ab. In NRW klären wir das früh mit Ihnen – vor Vertragsabschluss und vor Bestellung von Material."
        }
      },
      {
        "@type": "Question",
        name: "Wie lange dauert ein Dachausbau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je nach Umfang rechnen Sie mit acht bis vierzehn Wochen Bauzeit. Statik, Dachfenster-Lieferzeiten und Estrichtrocknung sind häufige Termintreiber. Ein fester Ablaufplan mit einem koordinierenden Fachbetrieb reduziert Stillstand."
        }
      }
    ]
  },
  sections: [
    {
      heading: "Richtpreise Dachausbau NRW 2026 auf einen Blick",
      blocks: [
        {
          type: "p",
          text: "Die folgenden Werte sind <strong>Richtpreise für Nordrhein-Westfalen 2026</strong> (brutto, inkl. üblicher Handwerksleistungen, ohne Küche und ohne individuelle Architekturleistungen). Sie ersetzen kein Angebot nach Vor-Ort-Besichtigung."
        },
        {
          type: "table",
          table: {
            headers: ["Ausbauvariante", "Typische Fläche", "Richtpreis NRW 2026 (brutto)"],
            rows: [
              ["Einfachausbau (Dämmung, Trockenbau, Maler)", "ca. 40–70 m²", "35.000 – 70.000 €"],
              ["Komfortausbau inkl. Bad, Estrich, Fenster", "ca. 50–90 m²", "55.000 – 110.000 €"],
              ["Premium mit bodengleicher Dusche, Fußbodenheizung", "ca. 60–100 m²", "90.000 – 150.000+ €"],
              ["Nur Innenausbau (Dach bereits gedämmt)", "pro m²", "350 – 650 €/m²"]
            ]
          }
        },
        {
          type: "p",
          text: "In <a href=\"/einsatzgebiet/duesseldorf\">Düsseldorf</a>, <a href=\"/einsatzgebiet/koeln\">Köln</a> und <a href=\"/einsatzgebiet/essen\">Essen</a> liegen Lohn- und Logistikkosten oft im oberen Bereich. In <a href=\"/einsatzgebiet/dortmund\">Dortmund</a> und <a href=\"/einsatzgebiet/bochum\">Bochum</a> sind die Spanne ähnlich – entscheidend bleiben Dachform, Statik und Anzahl der Dachfenster."
        }
      ]
    },
    {
      heading: "Einzelkosten: Was kostet welcher Baustein?",
      blocks: [
        {
          type: "p",
          text: "Ein Dachausbau verbindet mehrere Gewerke. Wer die Positionen kennt, vergleicht Angebote schneller und erkennt Lücken in der Kalkulation."
        },
        {
          type: "ul",
          items: [
            "<strong>Statik und Planung:</strong> 2.500 – 8.000 €, je nach Eingriff in den Dachstuhl",
            "<strong>Dämmung Dachschräge / Zwischensparren:</strong> 80 – 140 €/m² Dachfläche",
            "<strong><a href=\"/leistungen/fenster-tueren-montage-nrw\">Dachfenster</a> inkl. Einbau:</strong> 800 – 2.200 € pro Stück (Größe und Qualität)",
            "<strong><a href=\"/leistungen/trockenbau-nrw\">Trockenbau</a> Wände/Decke:</strong> 45 – 85 €/m² beplankte Fläche",
            "<strong>Estrich / Fußbodenheizung:</strong> 35 – 75 €/m² (nass) bzw. 50 – 95 €/m² (FBH)",
            "<strong><a href=\"/leistungen/malerarbeiten-nrw\">Malerarbeiten</a>:</strong> 8 – 18 €/m² Wand/Decke",
            "<strong>Elektro, Sanitär, Bad:</strong> 8.000 – 25.000 € je nach Ausstattung",
            "<strong>Treppe / Geländer:</strong> 3.500 – 12.000 €"
          ]
        },
        {
          type: "p",
          text: "Die <strong>Dämmung und luftdichte Anschlüsse</strong> sind Pflicht für Energieeffizienz und Behaglichkeit. Sparen an Dämmdicke oder Dampfsperre führt zu Kondenswasser und teuren Folgeschäden – im Zweifel <a href=\"/leistungen/schimmelbeseitigung-nrw\">Schimmelursachen</a> klären, bevor verkleidet wird."
        }
      ]
    },
    {
      heading: "Die wichtigsten Kostentreiber und Planungstipps",
      blocks: [
        {
          type: "h3",
          text: "1. Dachform und Raumhöhe"
        },
        {
          type: "p",
          text: "Satteldächer mit steiler Neigung bieten oft mehr nutzbare Höhe als Flachdächer mit niedriger Kniestiefe. Liegt die Raumhöhe unter 2,00 m in Teilen, sind nur begrenzte Nutzungen möglich – oder teure Dachaufstockungen nötig. Messen Sie früh: lichte Höhe, Kniestiefe, Sparrenabstand."
        },
        {
          type: "h3",
          text: "2. Anzahl und Größe der Dachfenster"
        },
        {
          type: "p",
          text: "Licht und Belüftung bestimmen die Wohnqualität. Pro zusätzlichem Fenster kommen Einbau, Anschlussbleche und oft Anpassungen am Dachstuhl hinzu. Energieeffiziente Dreh-Kipp-Elemente mit Ug-Wert um 0,9–1,1 lohnen sich langfristig – kombinierbar mit <a href=\"/leistungen/fassadendaemmung-nrw\">Fassadensanierung</a> im Gesamtkonzept."
        },
        {
          type: "h3",
          text: "3. Bad im Dachgeschoss"
        },
        {
          type: "p",
          text: "Ein Dachbad erfordert statische Prüfung, Entwässerung und Abdichtung. Richtwert 2026: <strong>12.000 – 22.000 €</strong> für ein Standardbad 6–8 m². Leitungswege sind oft länger als im Erdgeschoss – das erhöht Sanitärkosten."
        },
        {
          type: "ul",
          items: [
            "Früh Statiker und <a href=\"/leistungen/dachausbau-nrw\">Dachausbau-Fachbetrieb</a> gemeinsam einbinden",
            "Nutzungskonzept schriftlich festhalten (Zimmer, Homeoffice, Gäste)",
            "Brandschutz und Fluchtwege bei MFH mit Verwaltung klären",
            "Schallschutz zwischen Geschossen nicht vergessen (Trittschalldämmung)",
            "Puffer 10 % für Entdeckungen im Dachstuhl einplanen"
          ]
        }
      ]
    },
    {
      heading: "Förderungen und energetische Anforderungen 2026",
      blocks: [
        {
          type: "p",
          text: "Wird der Dachausbau mit <strong>Dämmung nach aktuellen Standards</strong> verbunden, können Bundes- und Landesprogramme (z. B. KfW im Sanierungskontext) relevant sein. Anträge stellen Sie in der Regel <strong>vor</strong> Vertragsabschluss und Baubeginn – Förderquoten und Fristen ändern sich."
        },
        {
          type: "p",
          text: "In NRW lohnt sich die Kombination: Dachausbau plus <a href=\"/leistungen/fenster-tueren-montage-nrw\">Fenstertausch</a> im Untergeschoss oder <a href=\"/leistungen/fassadendaemmung-nrw\">Fassadendämmung</a>. Ein <a href=\"/leistungen/generalunternehmer-nrw\">Generalunternehmer</a> koordiniert Anträge, Gewerke und Abnahmen aus einer Hand."
        },
        {
          type: "ul",
          items: [
            "Energieberater früh einbinden – spart Nacharbeiten",
            "Luftdichtheitskonzept dokumentieren (Blower-Door optional)",
            "Heizlast neu berechnen nach Dämmung",
            "Rechnungen mit getrennten Material- und Lohnanteilen für Steuer/Förderung"
          ]
        }
      ]
    },
    {
      heading: "Ablauf: Von der Idee bis zur bezugsfertigen Etage",
      blocks: [
        {
          type: "ol",
          items: [
            "<strong>Erstgespräch:</strong> Nutzung, Budget, Fotos – per <a href=\"/kontakt\">Kontakt</a> oder Telefon.",
            "<strong>Vor-Ort und Statik:</strong> Dachstuhl, Höhen, Fensterpositionen.",
            "<strong>Genehmigung:</strong> falls nötig, Bauantrag oder Bauanzeige.",
            "<strong>Festpreis-Angebot:</strong> Gewerke, Termine, Zahlungsplan.",
            "<strong>Rohbau Dach:</strong> Dämmung, Fenster, Dampfsperre.",
            "<strong>Innenausbau:</strong> <a href=\"/leistungen/trockenbau-nrw\">Trockenbau</a>, Estrich, Elektro, Sanitär.",
            "<strong>Endmontage:</strong> Maler, Böden, Abnahme."
          ]
        },
        {
          type: "p",
          text: "Die reine Bauzeit liegt oft bei <strong>8–14 Wochen</strong>. Estrichtrocknung und Fensterlieferung können die Kalenderwochen verlängern – im Angebot sollten Puffer transparent sein."
        }
      ]
    },
    {
      heading: "Beispielkalkulation: Dachausbau 65 m² in NRW 2026",
      blocks: [
        {
          type: "table",
          table: {
            headers: ["Position", "Richtwert"],
            rows: [
              ["Statik, Planung, Gerüstanteil", "4.000 – 7.500 €"],
              ["Dämmung, Unterspannbahn, Anschlüsse", "8.000 – 14.000 €"],
              ["4× Dachfenster mittlere Klasse", "5.500 – 9.000 €"],
              ["Trockenbau, Estrich, Maler", "12.000 – 22.000 €"],
              ["Elektro, Heizung, Lüftung", "6.000 – 12.000 €"],
              ["Bad Standard 7 m²", "14.000 – 20.000 €"],
              ["Treppe, Geländer, Kleinmaterial", "5.000 – 9.000 €"],
              ["<strong>Summe (Komfortausbau)</strong>", "<strong>ca. 55.000 – 93.500 €</strong>"]
            ]
          }
        },
        {
          type: "p",
          text: "Das entspricht grob <strong>850 – 1.440 €/m²</strong> Nutzfläche. In Düsseldorf und Köln liegen viele Projekte im mittleren bis oberen Bereich wegen Zugangslogistik und höherer Lohnkosten."
        }
      ]
    },
    {
      heading: "Checkliste Dachausbau 2026",
      blocks: [
        {
          type: "ul",
          items: [
            "Statik und Genehmigung vor Materialbestellung",
            "Dämmung und Dampfsperre im Angebot",
            "Dachfenster: Anzahl, Maße, Ug-Wert",
            "Estrich, FBH, Trocknungszeiten",
            "Bad im Dach: Entwässerung geklärt",
            "Brandschutz und Schallschutz bei MFH",
            "Festpreis mit Zahlungsplan und Puffer 10 %"
          ]
        },
        {
          type: "p",
          text: "Wer in Düsseldorf oder Köln ein ausgebautes Dachgeschoss vermieten will: Energieausweis, Zweitentlüftung und ggf. separate Zähler früh mitdenken – das beeinflusst die Gesamtkosten, spart aber Nachrüstungen."
        }
      ]
    },
    {
      heading: "Genehmigung und Nachbarschaft",
      blocks: [
        {
          type: "p",
          text: "Neue Dachfenster zur Straße können genehmigungspflichtig sein – Fassadenbild und Abstandsflächen prüfen. Gerüst und Kranzeiten mit Nachbarn abstimmen, besonders in dicht bebauten Reihen in Essen oder Bochum."
        },
        {
          type: "p",
          text: "Bei Denkmalschutz gelten andere Materialien und Farben – Kosten steigen, Förderungen können dennoch greifen, wenn energetische Mindeststandards erreicht werden."
        }
      ]
    },
    {
      heading: "Dachausbau in Düsseldorf, Köln, Dortmund, Essen und Bochum",
      blocks: [
        {
          type: "p",
          text: "HausFit NRW realisiert Dachprojekte in ganz NRW – mit Schwerpunkt Rhein-Ruhr. Stadtseiten mit lokalen Hinweisen: <a href=\"/dachausbau-duesseldorf\">Dachausbau Düsseldorf</a>, <a href=\"/dachausbau-koeln\">Köln</a>, <a href=\"/dachausbau-dortmund\">Dortmund</a>, <a href=\"/dachausbau-essen\">Essen</a>, <a href=\"/dachausbau-bochum\">Bochum</a>. Übersicht: <a href=\"/einsatzgebiet\">Einsatzgebiet</a>."
        },
        {
          type: "p",
          text: "Typisch in den Städten: Reihen- und Zechenhäuser mit niedriger Kniestiefe in Essen und Bochum, Gründerzeit-Dächer in Düsseldorf, sanierte Satteldächer in Köln. Lokale Erfahrung hilft bei Genehmigung und Nachbarschaft – nicht bei der Qualität der Dämmung."
        }
      ]
    },
    {
      heading: "Dachausbau und Vermietung – Rendite realistisch rechnen",
      blocks: [
        {
          type: "p",
          text: "Viele Eigentümer in Düsseldorf und Köln finanzieren den Ausbau über höhere Mieteinnahmen. Rechnen Sie konservativ: Investition geteilt durch Mehrmiete über 10–15 Jahre, minus Leerstand und Instandhaltung. Ein zusätzliches Zimmer oder ein Dachbad steigert die Attraktivität – aber nur bei legaler Nutzung und guter Energiebilanz."
        },
        {
          type: "p",
          text: "Steuerlich können Abschreibungen und Handwerkerleistungen relevant sein – Steuerberater einbeziehen. Für die Ausführung: ein Angebot mit Festpreis, klarer Gewährleistung und dokumentierter Dämmung – das erleichtert später Verkauf und Vermietung."
        }
      ]
    },
    {
      heading: "Fazit: Früh planen, Festpreis sichern",
      blocks: [
        {
          type: "p",
          text: "Für einen vollständigen <strong>Dachausbau in NRW 2026</strong> sollten Sie mit <strong>900 – 1.600 €/m²</strong> Nutzfläche rechnen – plus Reserve für Statik und Wünsche. Wer Statik, Dämmung und Innenausbau koordiniert aus einer Hand beauftragt, spart Schnittstellen und Nachträge."
        },
        {
          type: "p",
          text: "Weitere Antworten in den <a href=\"/faq\">FAQ</a>. Für Ihr Dachprojekt erstellen wir nach Besichtigung ein transparentes Angebot mit Festpreis und klaren Terminen."
        }
      ]
    }
  ]
};
