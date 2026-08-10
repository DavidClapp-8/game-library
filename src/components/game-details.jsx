import BackButton from './back-button'
function GameDetails({ game, onBack }) {
  return (
    <div className="game-details">
      <BackButton onBack={onBack} />
      <h1>{game.title}</h1>

      <img src={game.banner} alt={game.title} />

      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>Released: {game.releaseYear}</p>
      <p>Rating: {game.rating}/10</p>

      <p>{game.description}</p>
    </div>
  )
}

export default GameDetails