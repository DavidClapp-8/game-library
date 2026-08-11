import { useState } from 'react'
import AddToLibrary from './add-to-library'

function GameCard({ game, onClick }) {



  return (
    <div className="game-card" onClick={onClick}>
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <p><strong>Genre:</strong> {game.genre}</p>

    </div>
  )
}

export default GameCard