import BackButton from './back-button'
import AddToLibrary from './add-to-library'

function GameDetails({ game, onBack, onAdd, onRemove, isInLibrary }) {
  return (
    <div className="game-details">
      <BackButton onBack={onBack} />
      <h1>{game.title}</h1>

      <img src={game.banner} alt={game.title} />

      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>Released: {game.releaseYear}</p>


      <p>{game.description}</p>

      {isInLibrary ? (
        <button onClick={onRemove}>Remove from Library</button>
      ) : (
        <AddToLibrary onAdd={onAdd} />
      )}
    </div>
  )
}

export default GameDetails