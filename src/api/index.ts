import type { Repo, User } from '@/types/github'

/**
 * Get Repositories for a GitHub User
 *
 * Retrieves a list of repositories belonging to a specific GitHub user.
 *
 * @param {string} user - The username of the GitHub user.
 * @returns {Promise<Repo[]>} - A promise that resolves to an array of repository objects, or rejects with an error.
 */
export async function getRepos(user: string): Promise<Repo[]> {
  const response: Response = await fetch('https://api.github.com/users/' + user + '/repos', {
    method: 'GET'
  })
  return (await response.json()) as Repo[]
}

/**
 * Get GitHub User Profile
 *
 * Retrieves the GitHub user profile information for a specific user.
 *
 * @param {string} user - The username of the GitHub user.
 * @returns {Promise<User>} - A promise that resolves to the user profile object, or rejects with an error.
 */
export async function getGithubProfile(user: string): Promise<User> {
  const response: Response = await fetch('https://api.github.com/users/' + user, {
    method: 'GET'
  })
  return (await response.json()) as User
}
