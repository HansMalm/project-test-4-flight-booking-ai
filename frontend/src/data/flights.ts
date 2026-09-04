export interface Flight {
  id: string
  airline: string
  flightNumber: string
  originCode: string
  originCity: string
  destCode: string
  destCity: string
  departure: string
  arrival: string
  duration: string
  price: string
}

export const flights: Flight[] = [
  { id: '1', airline: 'Around the World Air', flightNumber: 'AW 204', originCode: 'ARN', originCity: 'Stockholm', destCode: 'CDG', destCity: 'Paris', departure: '08:15', arrival: '10:40', duration: '2h 25m', price: 'from 1 890 kr' },
  { id: '2', airline: 'Around the World Air', flightNumber: 'AW 118', originCode: 'ARN', originCity: 'Stockholm', destCode: 'HND', destCity: 'Tokyo', departure: '10:25', arrival: '06:40 +1', duration: '11h 15m', price: 'from 6 450 kr' },
  { id: '3', airline: 'Compass Airways', flightNumber: 'CA 331', originCode: 'ARN', originCity: 'Stockholm', destCode: 'GIG', destCity: 'Rio de Janeiro', departure: '14:05', arrival: '21:30', duration: '12h 25m', price: 'from 7 120 kr' },
  { id: '4', airline: 'Meridian Skies', flightNumber: 'MS 552', originCode: 'ARN', originCity: 'Stockholm', destCode: 'CAI', destCity: 'Cairo', departure: '06:50', arrival: '12:35', duration: '4h 45m', price: 'from 3 210 kr' },
  { id: '5', airline: 'Around the World Air', flightNumber: 'AW 447', originCode: 'ARN', originCity: 'Stockholm', destCode: 'JFK', destCity: 'New York', departure: '13:20', arrival: '15:55', duration: '8h 35m', price: 'from 5 380 kr' },
  { id: '6', airline: 'Compass Airways', flightNumber: 'CA 219', originCode: 'ARN', originCity: 'Stockholm', destCode: 'SYD', destCity: 'Sydney', departure: '20:10', arrival: '19:45 +1', duration: '19h 35m', price: 'from 9 990 kr' },
]
