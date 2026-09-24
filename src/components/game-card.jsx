function GameCard({ game, onClick, status, onChangeStatus}) {



  return (
    <div className="game-card" onClick={onClick}>
      <img src={game.image} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.description}</p>
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Platform:</strong> {game.platform}</p>
      {status && (
        <>
          <p><strong>Status:</strong> {status}</p>

          <select
            value={status}
            onChange={(event) =>
              onChangeStatus(game.id, event.target.value)
            }
            onClick={(event) => event.stopPropagation()}
          >
            <option value="none">None</option>
            <option value="playing">Playing</option>
            <option value="played">Played</option>
            <option value="wishlist">Wishlist</option>
          </select>
        </>
      )}

    </div>
  )
}

export default GameCard