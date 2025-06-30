import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Router, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Banner from './assets/components/Banner'
import About from './assets/components/About'
import Facilities from './assets/components/Facilities'
import Holiday from './assets/components/Holiday'
import Services from './assets/components/Services'
import Footer from './assets/components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Navbar/>
<Banner/>
<About/>
<Facilities/>
<Holiday/>
<Services/>
<Footer/>

</div>
  )
}

export default App
