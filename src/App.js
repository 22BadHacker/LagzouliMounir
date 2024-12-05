import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import {NavBar, Home, Effect2, Footer} from './Component/main'
import Projects from './Pages/Projects'

export default function App() {
  return (
    <div className='w-screen relative h-screen pb-0 overflow-y-scroll overflow-x-hidden '>
      <Effect2 />
      <div className="max-w-[1150px] px-5 px pt-[13px] mx-auto w-full h-auto">
        <Router>
            <NavBar />
            <Routes>
              
              <Route path="/" element= {<Home />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          <Footer/>
        </Router>

      </div>

    </div>
  )
}