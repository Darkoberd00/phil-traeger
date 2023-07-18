export function addToClipboard(text: string, alertText: string) {
  navigator.clipboard.writeText(text).then(() => {
    alert(alertText)
  })
}

export function getIconFromLanguage(language: string): string {
  switch (language) {
    case 'Java':
      return 'vi-file-type-jar'
    case 'C++':
      return 'vi-file-type-cpp3'
    case 'TypeScript':
      return 'vi-file-type-typescript-official'
    case 'Jupyter Notebook':
      return 'vi-file-type-jupyter'
  }

  return ''
}
