import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchArticles } from '../../utils/api.ts'
import { Link } from 'react-router-dom'

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

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading &&
          !error &&
          articles.map(({ id, title, slug }) => (
            <h2 key={id}>
              {/*<Link to={`${slug}/${id}`} state={{ id }}>*/}
              <Link to={`${slug}`} state={{ id }}>
                {title}
              </Link>
            </h2>
          ))}
      </div>
    </div>
  )
}

export default Articles
