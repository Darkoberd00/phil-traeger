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

export function getAge(oDate: Date): number {
  const diff_ms: number = Date.now() - oDate.getTime()
  const age_ms: Date = new Date(diff_ms)
  const age_years: number = age_ms.getUTCFullYear() - 1970
  return age_years < 0 ? NaN : age_years
}

export function isMyBirthdayToday(oDate: Date): boolean {
  const today = new Date()
  return oDate.getDay() === today.getDay() && oDate.getMonth() === today.getMonth()
}
