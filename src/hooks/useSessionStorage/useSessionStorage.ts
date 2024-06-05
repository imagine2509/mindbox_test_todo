import { useState } from 'react'

type UseSessionStorageProps = {
  key: string
  value: JSON
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSessionStorage = ({ key, value }: UseSessionStorageProps) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(key)

      if (value) {
        return JSON.parse(value)
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(value))

        return value
      }
    } catch (err) {
      return value
    }
  })

  const setValue = (newValue: JSON): void => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(newValue))
    } catch (err) { }
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
