import axios from 'axios'

export const fetchRepositories = async (query: string) => {
  const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`)
  return response.data.items
}
