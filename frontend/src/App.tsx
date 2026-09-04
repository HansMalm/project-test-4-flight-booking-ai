import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import FlightGrid from './components/FlightGrid'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="layout">
        <Sidebar />
        <FlightGrid />
      </div>
      <Footer />
    </>
  )
}

export default App
