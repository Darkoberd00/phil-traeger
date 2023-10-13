/**
 * Get Icon Name for Programming Language
 *
 * Retrieves the corresponding icon name for a given programming language.
 *
 * @param {string} language - The name of the programming language.
 * @returns {string} - The name of the corresponding icon or an empty string if no match is found.
 */
export function getIconFromLanguage(language: string): string {
  switch (language) {
    case 'Java':
      return 'vi-file-type-jar'
    case 'C++':
      return 'vi-file-type-cpp3'
    case 'TypeScript':
      return 'vi-file-type-typescript-official'
    case 'JavaScript':
      return 'vi-file-type-js-official'
    case 'Rust':
      return 'vi-file-type-rust'
    case 'Elixir':
      return 'vi-file-type-elixir'
    case 'Shell':
      return 'vi-file-type-powershell'
    case 'Jupyter Notebook':
      return 'vi-file-type-jupyter'
  }

  return ''
}

/**
 * Calculate Age
 *
 * Calculates the age in years based on the provided birthdate.
 *
 * @param {Date} oDate - The birthdate as a JavaScript Date object.
 * @returns {number} - The age in years, or NaN if the provided birthdate is invalid.
 */
export function getAge(oDate: Date): number {
  const diff_ms: number = Date.now() - oDate.getTime()
  const age_ms: Date = new Date(diff_ms)
  const age_years: number = age_ms.getUTCFullYear() - 1970
  return age_years < 0 ? NaN : age_years
}

/**
 * Check if the Given Date is Today's Birthday
 *
 * Checks whether the provided date matches today's date in terms of day and month,
 * indicating if it's the user's birthday today.
 *
 * @param {Date} oDate - The birthdate to check as a JavaScript Date object.
 * @returns {boolean} - True if the provided date is today's date (in terms of day and month), otherwise false.
 */
export function isMyBirthdayToday(oDate: Date): boolean {
  const today = new Date()
  return oDate.getDay() === today.getDay() && oDate.getMonth() === today.getMonth()
}
