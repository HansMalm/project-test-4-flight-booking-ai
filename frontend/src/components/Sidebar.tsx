import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>

      <div className="filter-group">
        <h3>Price</h3>
        <div className="price-inputs">
          <input type="number" placeholder="Min" />
          <span>–</span>
          <input type="number" placeholder="Max" />
        </div>
      </div>

      <div className="filter-group">
        <h3>Stops</h3>
        <label><input type="checkbox" /> Nonstop</label>
        <label><input type="checkbox" /> 1 stop</label>
        <label><input type="checkbox" /> 2+ stops</label>
      </div>

      <div className="filter-group">
        <h3>Airline</h3>
        <label><input type="checkbox" /> Around the World Air</label>
        <label><input type="checkbox" /> Compass Airways</label>
        <label><input type="checkbox" /> Meridian Skies</label>
      </div>
    </aside>
  )
}

export default Sidebar
