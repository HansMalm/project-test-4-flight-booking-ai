import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar-brand">Around the World</span>
      <nav className="navbar-links">
        <a href="#flights">Flights</a>
        <a href="#bookings">My Bookings</a>
      </nav>
    </header>
  )
}

export default Navbar
