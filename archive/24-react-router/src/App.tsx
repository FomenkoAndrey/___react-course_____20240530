import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contacts from './components/Contacts.tsx'
import NotFound from './components/NotFound.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
