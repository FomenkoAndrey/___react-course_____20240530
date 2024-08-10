export interface GithubItem {
  id: number
  name: string
  full_name: string
  description: string
  owner: {
    avatar_url: string
    html_url: string
  }
}
