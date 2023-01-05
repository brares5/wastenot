import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return <>
  <Container>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/search"  element={<SearchPage/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </Container>
  </>
}

export default App;
