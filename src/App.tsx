import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/pages/footer/Footer'
import Home from './assets/pages/home/Home'
import Navbar from './assets/pages/navbar/Navbar'

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <div className='min-h-[100vh]'>
  <Routes>
  <Route path="/" element={ <Home/>} />
  <Route path="/home" element={ <Home/>} />
  </Routes>
  </div>
  <Footer/>
  </BrowserRouter>

  </>
 )       
  
}

export default App
