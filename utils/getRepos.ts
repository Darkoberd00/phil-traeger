import type { Repo } from '~/types/github'

/**
 * Get Repositories for a GitHub User
 *
 * Retrieves a list of repositories belonging to a specific GitHub user.
 *
 * @param {string} user - The username of the GitHub user.
 * @returns {Promise<Repo[]>} - A promise that resolves to an array of repository objects, or rejects with an error.
 */
export default async function (user: string): Promise<Repo[]> {
  const response: Response = await fetch('https://api.github.com/users/' + user + '/repos', {
    method: 'GET'
  })
  return (await response.json()) as Repo[]
}
