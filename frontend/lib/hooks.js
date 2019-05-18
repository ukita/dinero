import { useState } from 'react'

export function useInput (initialState = '', valueKey = 'value') {
  const [value, setValue] = useState(initialState)

  function setValueFromEvent (event) {
    setValue(event.target[valueKey])
  }

  function resetValue () {
    setValue(initialState)
  }

  return [value, setValueFromEvent, resetValue]
}
