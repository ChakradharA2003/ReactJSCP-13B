// Write your code here
import './index.css'

const AppItem = props => {
  const {name, url} = props
  return (
    <li className="app-container">
      <img src={url} alt={name} className="app-image" />
      <p className="app-name">{name}</p>
    </li>
  )
}
export default AppItem
