import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const useSortField = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)

  const sortKey: string | null = query.sort?.toString() || null
  const sortQuery: string = `${sortKey ? '?sort=' + sortKey : ''}`

  // console.log('location:', location)
  // console.log('query:', query)
  // console.log('sortField:', sortField)
  // console.log('sortQuery:', sortQuery)

  return { sortKey, sortQuery }
}
