/** @typedef {{ percent: number; validUntil: string }} Promotion */

/**
 * Active promotions, keyed by the NRW service page's metaSlug
 * (e.g. "badsanierung-nrw"). To launch a promo, add an entry here.
 * To end one early, remove its entry. Entries past `validUntil`
 * stop rendering automatically on the next build.
 *
 * @type {Record<string, Promotion>}
 */
export const promotions = {
  "badsanierung-nrw": { percent: 15, validUntil: "2026-09-30" }
};

/**
 * @param {string} iso
 * @returns {string}
 */
function formatGermanDate(iso) {
  const [year, month, day] = iso.split("-");
  return `${day}.${month}.${year}`;
}

/**
 * @param {string} metaSlug
 * @param {Date} [referenceDate]
 * @returns {{ percent: number; validUntil: string; validUntilLabel: string } | undefined}
 */
export function getActivePromotion(metaSlug, referenceDate = new Date()) {
  const promo = promotions[metaSlug];
  if (!promo) return undefined;

  const until = new Date(`${promo.validUntil}T23:59:59`);
  if (until < referenceDate) return undefined;

  return {
    percent: promo.percent,
    validUntil: promo.validUntil,
    validUntilLabel: formatGermanDate(promo.validUntil)
  };
}
