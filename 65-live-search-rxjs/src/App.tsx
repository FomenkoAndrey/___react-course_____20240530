import { FC, useRef } from 'react'
import SearchInput from './components/SearchInput.tsx'
import Results from './components/Results.tsx'
import { useGithubSearch } from './hooks/useGithubSearch.ts'

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const results = useGithubSearch(inputRef)

  return (
    <div className="container py-5">
      <SearchInput ref={inputRef} />
      <Results results={results} />
    </div>
  )
}

export default App
