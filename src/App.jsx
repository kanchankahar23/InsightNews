import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Route } from 'lucide-react'
import Home from './pages/Home'

import ShowNews from "./pages/ShowNews";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<ShowNews />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App