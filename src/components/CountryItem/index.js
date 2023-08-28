import './index.css'

const CountryItem = props => {
  const {specs, onRemoving} = props
  const {id, name, imageUrl} = specs
  const onClickRemove = () => {
    onRemoving(id)
  }

  return (
    <li className="listEl">
      <img src={imageUrl} alt="thumbnail" className="countImg" />
      <div className="listCon">
        <p className="listP">{name}</p>
        <button type="button" className="remBton" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
