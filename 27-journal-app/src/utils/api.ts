import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10'

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error: unknown) {
    throw new Error('Error fetching articles')
  }
}
