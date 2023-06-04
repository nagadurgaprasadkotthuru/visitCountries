import './index.css'

const VisitedCountryCard = props => {
  const {visitedCountryCardDetails, onClickRemove} = props
  const {id, name, imageUrl} = visitedCountryCardDetails
  const clickRemove = () => onClickRemove(id)
  return (
    <li className="visited-country-list">
      <img className="visited-country-image" alt="thumbnail" src={imageUrl} />
      <div className="name-button-container">
        <p className="visited-name">{name}</p>
        <button className="remove-button" type="button" onClick={clickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryCard
