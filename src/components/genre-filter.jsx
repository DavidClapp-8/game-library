function GenreFilter({ genre, setGenre }) {
  return (
    <select
      value={genre}
      onChange={(event) => setGenre(event.target.value)}
    >
      <option value="All">All Genres</option>
      <option value="Action">Action</option>
      <option value="Sandbox">Sandbox</option>
    </select>
  )
}

export default GenreFilter