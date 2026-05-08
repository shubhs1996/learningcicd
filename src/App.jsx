import { useState } from 'react'

export default function App() {
  const mode= import.meta.env.VITE_ENV_MOD
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>🚀 My First React Page {mode}</h1>

      <p>This is a simple React page using Vite.</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <footer>
        <p>Made with React ⚛️</p>
      </footer>
    </div>
  )
}