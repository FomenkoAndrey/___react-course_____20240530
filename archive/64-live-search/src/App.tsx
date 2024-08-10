// const debounceTime = (() => {
//   let timer = null
//   return (cb, ms) => {
//     if (timer) {
//       clearTimeout(timer)
//       timer = null
//     }
//     timer = setTimeout(cb, ms)
//   }
// })()

import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

type SearchFunction = {
  (searchValue: string): void
}

const useDebounce = (callback: SearchFunction, delay: number) => {
  const timer = useRef<number | null>(null)

  const debouncedFunction = useCallback(
    (args: string) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = window.setTimeout(() => {
        callback(args)
      }, delay)
    },
    [callback, delay]
  )

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  return debouncedFunction
}

const App = () => {
  const [currentSearch, setCurrentSearch] = useState<string>('')
  const [lastSearch, setLastSearch] = useState<string>('')

  const debounceSearch = useDebounce((searchValue: string) => {
    if (!searchValue || searchValue.length < 4 || searchValue === lastSearch) return
    setLastSearch(searchValue)
    console.log('searching for:', searchValue)
  }, 2000)

  const inputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim()
    setCurrentSearch(searchValue)
    debounceSearch(searchValue)
  }

  return (
    <div>
      <h1>Vanilla JS live search</h1>
      <input type="text" value={currentSearch} onChange={inputSearchHandler} />
    </div>
  )
}

export default App
