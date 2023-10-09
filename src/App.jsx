import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <div>
        <NavBar/>
      </div>
        <ItemListContainer props={'Bienvenido'}/>
    </>
  )
}

export default App
