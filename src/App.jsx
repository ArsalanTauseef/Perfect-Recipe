import './App.css'
import { Home } from './Components/Midsection/Nav Pages/Home/Home'
import { Header } from './Components/Header/Header'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
    <Header/>
    <Outlet/> 
    </>
  )
}

export default App
