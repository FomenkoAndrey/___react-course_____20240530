import { ChangeEvent, RefObject, useEffect, useState } from 'react'
import { DisplayItem } from '../types/DisplayItem.ts'
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap } from 'rxjs'
import { fetchRepositories } from '../utils/fetchRepositories.ts'
import { GithubItem } from '../types/GithubItem.ts'

export const useGithubSearch = (inputRef: RefObject<HTMLInputElement>) => {
  const [results, setResults] = useState<DisplayItem[]>([])

  useEffect(() => {
    if (!inputRef.current) return

    const subscription = fromEvent<ChangeEvent<HTMLInputElement>>(inputRef.current, 'input')
      .pipe(
        map((e) => e.target.value.trim()),
        filter((value) => value.length > 3),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value: string) =>
          fetchRepositories(value).then((items: GithubItem[]) =>
            items.map((item: GithubItem) => ({
              id: item.id,
              name: item.name,
              fullName: item.full_name,
              description: item.description || 'No description',
              avatarUrl: item.owner.avatar_url,
              url: item.owner.html_url
            }))
          )
        )
      )
      .subscribe(setResults)

    return () => subscription.unsubscribe()
  }, [])

  return results
}
