import './index.css'

const AddingCountry = props => {
  const {details, onVisiting} = props
  const {id, name, isVisited} = details
  const classId = isVisited ? 'visited' : 'notVisited'
  const onClickingVisit = () => {
    onVisiting(id)
  }

  return (
    <li className="liEl">
      <p className="liP">{name}</p>
      {isVisited ? (
        <p className="listP">Visited</p>
      ) : (
        <button type="button" onClick={onClickingVisit} className={classId}>
          Visit
        </button>
      )}
    </li>
  )
}

export default AddingCountry
