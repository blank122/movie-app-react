import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <main>
      {/* Create a header component here in the app jsx */}
      <div className="pattern" />
      <div className="wrapper">
        <header className="">
          <img src="./hero.png" alt="Hero Banner" />

          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

        </header>
      </div>
    </main>
  )
}

export default App
