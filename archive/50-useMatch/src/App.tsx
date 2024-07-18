import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
