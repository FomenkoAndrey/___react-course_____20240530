import axios from 'axios'
import { ArticleInterface } from '../types/Article.interface.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchArticles = async () => {
  try {
    const params = {
      _start: 0,
      _limit: 10
    }
    const response = await axios.get(API_URL, { params })
    const data: ArticleInterface[] = (response.data as ArticleInterface[]).map((article) => ({
      ...article,
      slug: article.title.toLowerCase().replace(/\s+/g, '-')
    }))
    return data
  } catch (error: unknown) {
    throw new Error('Error fetching articles')
  }
}

export const fetchSingleArticle = async (id: number | string) => {
  try {
    console.log(API_URL + `/${id}`)
    const response = await axios.get(API_URL + `/${id}`)
    const data: ArticleInterface = response.data

    if (data) {
      const article: ArticleInterface = {
        ...data,
        slug: data.title.toLowerCase().replace(/\s+/g, '-')
      }
      return article
    }
  } catch (error: unknown) {
    throw new Error('Error fetching article')
  }
}
