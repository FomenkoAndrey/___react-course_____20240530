import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchArticles } from '../../utils/api.ts'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchArticles()
        setArticles(data)
        setError(null)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [])

  console.log(articles)
  console.log(error)
  console.log(isLoading)

  return <div>Articles</div>
}

export default Articles
