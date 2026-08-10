function BackButton({ onBack }) {
  return (
    <div className="back-button">
      <button onClick={onBack}>Back to Games</button>
    </div>
  )
}

export default BackButton