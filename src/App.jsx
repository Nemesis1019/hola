import {Home} from '/src/pages/Home'
import { Thankyou } from './pages/ThankYou'
import { Notfound } from './pages/NotFound'

import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/thanks" element={<Thankyou/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
