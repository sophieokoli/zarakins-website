import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/homepage"
import Gallery from "./pages/gallery"
import Products from "./pages/products"
import Contact from "./pages/contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App