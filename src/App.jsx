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

  return (
    <div className="App">
      <h1>Game Library</h1>
    
      <div className="game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
          ))}
      </div>
    </div>
  )
}

export default App
