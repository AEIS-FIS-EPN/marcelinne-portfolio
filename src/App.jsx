import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '../../../../../../vite.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app" className="relative h-screen p-2 gap-2">
      <header className="[grid-area:aside] flex-col flex overflow-y-auto">
        <h1> Hola</h1>
      </header>

      <main
        className="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full"
      >
        <h2>Marcelinne</h2>
      </main>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center bg-blue-100">Using Tailwind</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>

      <footer className="[grid-area:player] h-[80px]">
        <h3>Footer 2</h3>
      </footer>
    </div>
    </>
  )
}

export default App
