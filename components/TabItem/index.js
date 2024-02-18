// Write your code here
import './index.css'

const TabItem = props => {
  const {id, tab, onChangeCategory, activeTab} = props
  console.log(activeTab)
  const tabActive = activeTab ? 'active-tab-btn' : ''
  const changeCategory = () => {
    onChangeCategory(id)
  }
  return (
    <li className="tab-list">
      <button
        type="button"
        className={`tab-btn ${tabActive}`}
        onClick={changeCategory}
      >
        {tab}
      </button>
    </li>
  )
}
export default TabItem
