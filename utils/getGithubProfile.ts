import type { User } from '~/types/github'

/**
 * Get GitHub User Profile
 *
 * Retrieves the GitHub user profile information for a specific user.
 *
 * @param {string} user - The username of the GitHub user.
 * @returns {Promise<User>} - A promise that resolves to the user profile object, or rejects with an error.
 */
export default async function (user: string): Promise<User> {
  const response: Response = await fetch('https://api.github.com/users/' + user, {
    method: 'GET'
  })
  return (await response.json()) as User
}
