import { useState } from 'react'
import GameCard from './game-card'

function Library({ library, onChangeStatus }) {

  const [statusFilter, setStatusFilter] = useState('all')

  const filteredLibrary = library.filter((libraryGame) => {
    if (statusFilter === 'all') {
      return true
    }

    return libraryGame.status === statusFilter
  })

  return (
    <div className="my-library">

      <h1>Your Library</h1>

      <div className="library-filters">

        <button onClick={() => setStatusFilter('all')}>
          All
        </button>

        <button onClick={() => setStatusFilter('playing')}>
          Playing
        </button>

        <button onClick={() => setStatusFilter('played')}>
          Played
        </button>

        <button onClick={() => setStatusFilter('wishlist')}>
          Wishlist
        </button>

      </div>

      <div className="game-grid">

        {filteredLibrary.map((libraryGame) => (
          <GameCard
            key={libraryGame.game.id}
            game={libraryGame.game}
            status={libraryGame.status}
            onChangeStatus={onChangeStatus}
          />
        ))}

      </div>

    </div>
  )
}

export default Library