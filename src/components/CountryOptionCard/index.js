import './index.css'

const CountryOptionCard = props => {
  const {countryOptionCardDetails, onClickVisit} = props
  const {id, name, isVisited} = countryOptionCardDetails
  const clickVisit = () => onClickVisit(id)
  const buttonOrText = isVisited ? (
    <p className="visited">Visited</p>
  ) : (
    <button className="visit" type="button" onClick={clickVisit}>
      Visit
    </button>
  )
  return (
    <li className="country-option-card">
      <p className="name">{name}</p>
      {buttonOrText}
    </li>
  )
}

export default CountryOptionCard
