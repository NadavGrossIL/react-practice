import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-group">
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <button
        type="button"
        className="counter reset"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  )
}
