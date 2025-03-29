import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Career from "./pages/Career"
import Domestic from "./pages/Domestic"
import International from "./pages/International"
import Freight from "./pages/Freight"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/domestic" element={<Domestic/>}/>
          <Route path="/international" element={<International/>}/>
          <Route path="/Freight" element={<Freight/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
