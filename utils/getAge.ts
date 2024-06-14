/**
 * Calculate Age
 *
 * Calculates the age in years based on the provided birthdate.
 *
 * @param {Date} oDate - The birthdate as a JavaScript Date object.
 * @returns {number} - The age in years, or NaN if the provided birthdate is invalid.
 */
export default function (oDate: Date): number {
  const diffMs: number = Date.now() - oDate.getTime()
  const ageMs: Date = new Date(diffMs)
  const ageYears: number = ageMs.getUTCFullYear() - 1970
  return ageYears < 0 ? NaN : ageYears
}
