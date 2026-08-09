function SortFilter({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(event) => setSort(event.target.value)}
    >
      <option value="default">Default</option>
      <option value="az">A → Z</option>
      <option value="za">Z → A</option>
    </select>
  )
}

export default SortFilter