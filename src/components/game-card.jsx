import { useState } from 'react'

function GameCard({ game }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <p><strong>Genre:</strong> {game.genre}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  )
}

export default GameCard