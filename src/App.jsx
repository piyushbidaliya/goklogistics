import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Header from "./components/Header"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={Home}/>
          <Route path="/contact" element={Contact}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
