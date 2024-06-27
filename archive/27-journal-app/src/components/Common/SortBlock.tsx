import { useNavigate } from 'react-router-dom'

const SortBlock = () => {
  const navigate = useNavigate()

  const setSortKeyHandler = (key?: string) => {
    navigate(`${key ? '?sort=' + key : ''}`)
  }

  return (
    <div className="sort-block">
      <h2>Sort articles by:</h2>
      <button onClick={() => setSortKeyHandler('title')}>title, asc</button>
      <button onClick={() => setSortKeyHandler('-title')}>title, desc</button>
      <button onClick={() => setSortKeyHandler('id')}>id, asc</button>
      <button onClick={() => setSortKeyHandler('-id')}>id, desc</button>
      <button onClick={() => setSortKeyHandler()}>reset sorting</button>
    </div>
  )
}

export default SortBlock
