import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RDR2 from './assets/RDR2.jpg'
import Terraria from './assets/Terraria.jpg'
import './App.css'

import GameCard from './components/game-card'





  const games = [
    {
      title: 'Red Dead Redemption 2',
      description: 'This is a sample game description.',
      image: RDR2
    },
    { 
      title: 'Terraria',
      description: 'This is another game description.',
      image: Terraria
    }
  ]

function App() {

  const [search, setSearch] = useState('')

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Game Library</h1>
      
        <input 
          className="search-bar"
          type="text" 
          placeholder="Search games..." 
          value={search}
          onChange={(event) => setSearch(event.target.value)}/>

      <div className="game-grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
          ))}
      </div>
    </div>
  )
}

export default App
