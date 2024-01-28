/**
 * Calculate Age
 *
 * Calculates the age in years based on the provided birthdate.
 *
 * @param {Date} oDate - The birthdate as a JavaScript Date object.
 * @returns {number} - The age in years, or NaN if the provided birthdate is invalid.
 */
export default function (oDate: Date): number {
    const diff_ms: number = Date.now() - oDate.getTime()
    const age_ms: Date = new Date(diff_ms)
    const age_years: number = age_ms.getUTCFullYear() - 1970
    return age_years < 0 ? NaN : age_years
}
