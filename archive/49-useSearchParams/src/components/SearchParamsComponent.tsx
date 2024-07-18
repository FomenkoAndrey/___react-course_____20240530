import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const SearchParamsComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // ?query=React&page=1&sort=newest

  const handleSearch = () => {
    setSearchParams({ query: 'React', page: '1', sort: 'newest' })
  }

  useEffect(() => {
    console.log(JSON.stringify(Array.from(searchParams.entries())))
  }, [searchParams])

  return (
    <div>
      <p>Параметри пошуку: {JSON.stringify(Array.from(searchParams.entries()))}</p>
      <button onClick={handleSearch}>Змінити параметри пошуку</button>
    </div>
  )
}

export default SearchParamsComponent
