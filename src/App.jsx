import "./styles/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About"
import Home from "./pages/Home"

function Header(){
  return(
    <header>
      <h1>#VANLIFE</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  )
}

function Footer(){
  return(
    <footer>
      <p>©2025 #VANLIFE</p>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
