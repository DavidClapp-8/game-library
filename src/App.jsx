import { useState } from 'react'

import RDR2Banner from './assets/RDR2_banner.jpg'
import RDR2 from './assets/RDR2.jpg'
import Terraria from './assets/Terraria.jpg'
import './App.css'

import GameCard from './components/game-card'
import SearchBar from './components/search-bar'
import GenreFilter from './components/genre-filter'
import SortFilter from './components/sort-filter'
import GameDetails from './components/game-details'


  const games = [
    {
      id: 1,
      title: 'Red Dead Redemption 2',
      description: 'Western action-adventure game set in an open world environment.',
      genre: 'Action-Adventure',
      release_date: 'October 26, 2018',
      platform: 'PlayStation 4, Xbox One, PC',
      image: RDR2,
      banner: RDR2Banner
    },
    { 
      id: 2, 
      title: 'Terraria',
      description: 'A 2D sandbox game where players can build structures and explore vast worlds.',
      genre: 'Sandbox',
      release_date: 'May 16, 2011',
      platform: 'PC',
      image: Terraria,
      banner: Terraria
      
    },
    {
      id: 3,
      title: 'Spore',
      description: 'A game about evolution and creation.',
      genre: 'Sandbox',
      release_date: 'February 20, 2008',
      platform: 'PC',
      image: RDR2,
      banner: RDR2
    },
    { 
      id: 4, 
      title: 'The Sims 4',
      description: 'A life simulation game where players can create and control their own Sims.',
      genre: 'Simulation',
      release_date: 'September 15, 2014',
      platform: 'PC',
      image: Terraria,
      banner: Terraria
    },
    {
      id: 5,
      title: 'Minecraft',
      description: 'A sandbox game where players can build and explore vast worlds.',
      genre: 'Sandbox',
      release_date: 'November 18, 2011',
      platform: 'PC',
      image: RDR2,
      banner: RDR2
    },
    { 
      id: 6, 
      title: 'Zelda: Breath of the Wild',
      description: 'A action-adventure game set in an open world environment.',
      genre: 'Action-Adventure',
      release_date: 'March 4, 2017',
      platform: 'Nintendo Switch',
      image: Terraria,
      banner: Terraria
    },
    { 
      id: 7, 
      title: 'Action Game 1',
      description: 'An action-packed game with thrilling gameplay.',
      genre: 'Action',
      release_date: 'January 1, 2020',
      platform: 'PC',
      image: Terraria,
      banner: Terraria
    },

  ]

function App() {

  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')
  const [sort, setSort] = useState('default')
  const [selectedGame, setSelectedGame] = useState(null)


const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesGenre =
      genre === 'All' || game.genre === genre

    return matchesSearch && matchesGenre
  })

const sortedGames = [...filteredGames].sort((a, b) => {
  if (sort === 'az') {
    return a.title.localeCompare(b.title)
  }

  if (sort === 'za') {
    return b.title.localeCompare(a.title)
  }

  return 0
})

  return (
    <div>
    {/* Render GameDetails if a game is selected, otherwise render the game list with filters */}
    {selectedGame ? (
      <GameDetails
        game={selectedGame}
        onBack={() => setSelectedGame(null)}
      />
    ) : (
      <>
        <h1>Game Library</h1>
        <SearchBar search={search} setSearch={setSearch} />
        <GenreFilter genre={genre} setGenre={setGenre} />
        <SortFilter sort={sort} setSort={setSort} />
      {/* Render the game grid with filtered and sorted games */}
      <div className="game-grid">
        {sortedGames.map((game) => (
          <GameCard key={game.id} 
            game={game} 
            onClick={() => setSelectedGame(game)}
          />
          ))}
      </div>
      </>
    )}
    </div>
  )}

export default App
