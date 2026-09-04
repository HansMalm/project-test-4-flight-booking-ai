import { flights } from '../data/flights'
import FlightCard from './FlightCard'
import './FlightGrid.css'

function FlightGrid() {
  return (
    <section className="flight-grid" id="flights">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </section>
  )
}

export default FlightGrid
