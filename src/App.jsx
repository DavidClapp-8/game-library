import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RDR2 from './assets/RDR2.jpg'
import Terraria from './assets/Terraria.jpg'
import './App.css'

import GameCard from './components/game-card'
import SearchBar from './components/search-bar'
import GenreFilter from './components/genre-filter'




  const games = [
    {
      id: 1,
      title: 'Red Dead Redemption 2',
      description: 'Western action-adventure game set in an open world environment.',
      genre: 'Action-Adventure',
      image: RDR2
    },
    { 
      id: 2, 
      title: 'Terraria',
      description: 'A 2D sandbox game where players can build structures and explore vast worlds.',
      genre: 'Sandbox',
      image: Terraria
    },
    {
      id: 3,
      title: 'Spore',
      description: 'A game about evolution and creation.',
      genre: 'Sandbox',
      image: RDR2
    },
    { 
      id: 4, 
      title: 'The Sims 4',
      description: 'A life simulation game where players can create and control their own Sims.',
      genre: 'Simulation',
      image: Terraria
    },
    {
      id: 5,
      title: 'Minecraft',
      description: 'A sandbox game where players can build and explore vast worlds.',
      genre: 'Sandbox',
      image: RDR2
    },
    { 
      id: 6, 
      title: 'Zelda: Breath of the Wild',
      description: 'A action-adventure game set in an open world environment.',
      genre: 'Action-Adventure',
      image: Terraria
    },
    { 
      id: 7, 
      title: 'Action Game 1',
      description: 'An action-packed game with thrilling gameplay.',
      genre: 'Action',
      image: Terraria
    },

  ]

function App() {

  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')


const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesGenre =
      genre === 'All' || game.genre === genre

    return matchesSearch && matchesGenre
  })



  return (
    <div>
      <h1>Game Library</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <GenreFilter genre={genre} setGenre={setGenre} />

      <div className="game-grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
          ))}
      </div>


    </div>
  )
}

export default App
