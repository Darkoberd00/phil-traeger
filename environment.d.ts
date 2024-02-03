declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBLIC_URL: string
      PUBLIC_NAME: string
      PUBLIC_BIRTHDAY: string
      PUBLIC_GITHUB_USER: string
      PUBLIC_GITHUB_NONE_SHOW_REPOS: string
      TENOR_API_KEY: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
