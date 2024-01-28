/**
 * Check if the Given Date is Today's Birthday
 *
 * Checks whether the provided date matches today's date in terms of day and month,
 * indicating if it's the user's birthday today.
 *
 * @param {Date} oDate - The birthdate to check as a JavaScript Date object.
 * @returns {boolean} - True if the provided date is today's date (in terms of day and month), otherwise false.
 */
export default function (oDate: Date): boolean {
    const today = new Date()
    return oDate.getDay() === today.getDay() && oDate.getMonth() === today.getMonth()
}
