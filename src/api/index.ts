import type { Repo, User } from '@/types/github'

export async function getRepos(user: string): Promise<Repo[]> {
  const response: Response = await fetch('https://api.github.com/users/' + user + '/repos', {
    method: 'GET'
  })
  return (await response.json()) as Repo[]
}

export async function getGithubProfile(user: string): Promise<User> {
  const response: Response = await fetch('https://api.github.com/users/' + user, {
    method: 'GET'
  })
  return (await response.json()) as User
}
