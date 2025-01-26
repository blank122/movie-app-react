import './App.css'
import Search from './components/Search'

// eslint-disable-next-line no-unused-vars
import React from 'react'
const App = () => {
  return (
    <main>
      {/* Create a header component here in the app jsx */}
      <div className="pattern" />
      <div className="wrapper">
        <header className="">
          <img src="./hero.png" alt="Hero Banner" />

          <h1>Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy Without the Hassle</h1>
        </header>

        <Search />
      </div>
    </main>
  )
}

export default App
