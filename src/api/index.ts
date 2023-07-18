import type { Repo, User } from '@/types/github'

export async function getRepos(): Promise<Repo[]> {
  return await fetch('https://api.github.com/users/Darkoberd00/repos', {
    method: 'GET'
  }).then(async (response): Promise<Repo[]> => {
    return response.json()
  })
}

export async function getGithubProfile(): Promise<User> {
  return await fetch('https://api.github.com/users/Darkoberd00', {
    method: 'GET'
  }).then(async (response): Promise<User> => {
    return response.json()
  })
}
