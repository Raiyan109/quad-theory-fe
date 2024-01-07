import './App.css'
import FoodProvider from './context/FoodProvider'
import Home from './pages/Home'

function App() {

  return (
    <>
      <FoodProvider>
        <Home />
      </FoodProvider>
    </>
  )
}

export default App
