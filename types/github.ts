/**
 * GitHub Repository Type
 *
 * Represents a GitHub repository with various properties.
 *
 * @property {string} name - The name of the repository.
 * @property {string} html_url - The URL to the GitHub page of the repository.
 * @property {string} description - A brief description of the repository.
 * @property {string} created_at - The creation date of the repository as a string.
 * @property {string} language - The programming language used in the repository.
 * @property {number} stargazers_count - The number of stars received by the repository.
 * @property {number} watchers_count - The number of watchers of the repository.
 * @property {number} forks_count - The number of forks of the repository.
 * @property {string[]} topics - An array of topics or tags associated with the repository.
 * @property {boolean} archived - Indicates whether the repository is archived.
 * @property {boolean} fork - Indicates whether the repository is a fork of another repository.
 */
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

/**
 * GitHub User Profile Type
 *
 * Represents a GitHub user's profile with various properties.
 *
 * @property {string} login - The GitHub username of the user.
 * @property {string} avatar_url - The URL to the user's avatar image.
 * @property {string} html_url - The URL to the GitHub page of the user.
 * @property {string} name - The full name of the user.
 * @property {string} location - The user's location information.
 * @property {string} bio - The user's biography or description.
 * @property {number} public_repos - The number of public repositories owned by the user.
 * @property {number} public_gists - The number of public gists created by the user.
 * @property {number} followers - The number of followers of the user.
 * @property {number} following - The number of users the user is following.
 * @property {string} created_at - The user's account creation date as a string.
 */
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
