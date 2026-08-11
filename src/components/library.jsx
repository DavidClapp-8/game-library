import GameCard from './game-card'

function Library({ library }) {
  return (
    <div className="my-library">
      <h1>Your Library</h1>

      {library.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default Library