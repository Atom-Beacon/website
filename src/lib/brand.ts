/** Legal owner of site content and the Atom Beacon mark */
export const LEGAL_ENTITY = "ADGL Enterprises, LLC";

/** Unicode trade mark sign (™) */
export const TM = "\u2122";

/** Full brand name with ™ for titles, navigation, and prominent references */
export const BRAND_MARK = `Atom Beacon${TM}`;

export function formatCopyrightLine(year: number): string {
  return `© ${year} ${LEGAL_ENTITY}. All rights reserved.`;
}

export const TRADEMARK_ATTRIBUTION = `${BRAND_MARK} is a trademark of ${LEGAL_ENTITY}.`;
