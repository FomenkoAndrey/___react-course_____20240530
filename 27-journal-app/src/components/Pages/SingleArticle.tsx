import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchSingleArticle } from '../../utils/api.ts'
import { Link, useLocation } from 'react-router-dom'

const SingleArticle = () => {
  // const params = useParams()
  const location = useLocation()
  const [article, setArticle] = useState<ArticleInterface>()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        if (location.state) {
          const { id } = location.state
          if (id) {
            const data = await fetchSingleArticle(id)
            setArticle(data)
            setError(null)
          } else {
            throw new Error('No article ID provided')
          }
        } else {
          throw new Error('Location state is null')
        }
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [location.state])

  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && article && (
        <>
          <h1>{article.title}</h1>
          <hr />
          <h3>ID: {article.id}</h3>
          <h3>Slug: {article.slug}</h3>
          <hr />
          <p>{article.body}</p>
          <div className="link-xl">
            <Link to="../.." relative="path">
              All articles
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleArticle
