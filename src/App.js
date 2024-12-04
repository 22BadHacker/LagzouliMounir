import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import {NavBar, Home, Effect2} from './Component/main'

export default function App() {
  return (
    <div className='w-screen relative h-auto'>
      <Effect2 />
      <div className="max-w-[1150px] px-5 px py-[13px] mx-auto w-full h-auto">
        <Router>
            <NavBar />
            <Routes>
              
              <Route path="/" element= {<Home />} />
              <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </Router>

      </div>

    </div>
  )
}