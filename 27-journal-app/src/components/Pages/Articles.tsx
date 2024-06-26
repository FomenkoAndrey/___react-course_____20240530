import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/Article.interface.ts'
import { fetchArticles } from '../../utils/api.ts'
import { Link, useNavigate } from 'react-router-dom'
import { useSortField } from '../hooks/useSortField.ts'
import { generateTitle } from '../../utils/generateTitle.ts'
import { isValidSortField } from '../../utils/isValidSortKey.ts'
import SortBlock from '../Common/SortBlock.tsx'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { sortKey, sortQuery } = useSortField()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = isValidSortField(sortKey) ? await fetchArticles(sortKey) : await fetchArticles(null)
        setArticles(data)
        setError(null)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [sortKey])

  useEffect(() => {
    if (!isValidSortField(sortKey)) {
      navigate('.')
    }
  }, [navigate, sortKey])

  return (
    <div>
      <SortBlock />

      <h1>Articles{generateTitle(sortKey)}</h1>

      <div>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading &&
          !error &&
          articles.map(({ id, title, slug }) => (
            <h2 key={id}>
              <Link to={`${slug}/${id}`} state={{ id, sortQuery }}>
                {id}. {title}
              </Link>
            </h2>
          ))}
      </div>
    </div>
  )
}

export default Articles
