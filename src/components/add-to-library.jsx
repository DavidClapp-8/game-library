function AddToLibrary({ onAdd, onRemove, isInLibrary }) {
  return (
    <div className="add-to-library-">
      {isInLibrary ? (
        <button onClick={onRemove}>Remove from Library</button>
      ) : (
        <button onClick={onAdd}>Add to Library</button>
      )}
    </div>
  )
}

export default AddToLibrary