import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchSingleArticle } from '../../utils/api.ts'
import { Link, useLocation, useParams } from 'react-router-dom'

const SingleArticle = () => {
  const [article, setArticle] = useState<ArticleInterface>()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const params = useParams()
  const location = useLocation()
  const { state } = location || {}
  const { sortQuery } = state || {}

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchSingleArticle(`${params.id}`)
        setArticle(data)
        setError(null)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [params.id])

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
            <Link to={`../..${sortQuery}`} relative="path">
              All articles
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleArticle
