import { ChangeEvent, useState } from 'react'

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}
