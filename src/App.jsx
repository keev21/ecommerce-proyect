import { Routes, Route } from 'react-router'
import './App.css'
//se importa el componente HomePage
import HomePage from './Pages/HomePage'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<h1>Checkout</h1>} />
    </Routes>
  )
}

export default App
