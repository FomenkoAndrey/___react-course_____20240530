import axios from 'axios'
import { ArticleInterface } from '../types/Article.interface.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchArticles = async (sortField: string | null) => {
  try {
    const params: Record<string, number | string> = {
      _start: 0,
      _limit: 100
    }

    if (sortField !== null) {
      const sortOrder = sortField.startsWith('-') ? 'desc' : 'asc'
      // -id => id
      // id => id
      params['_sort'] = sortField.startsWith('-') ? sortField.substring(1) : sortField
      // -id => desc
      // id => asc
      params['_order'] = sortOrder
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
