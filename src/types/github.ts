export type Repo = {
  name: string
  html_url: string
  description: string
  created_at: string
  language: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  topics: string[]
  archived: boolean
  fork: boolean
}

export type User = {
  login: string
  avatar_url: string
  html_url: string
  name: string
  location: string
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
}
