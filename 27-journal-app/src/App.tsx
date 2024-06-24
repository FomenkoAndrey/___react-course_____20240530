import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home.tsx'
import About from './components/Pages/About.tsx'
import Contacts from './components/Pages/Contacts.tsx'
import NotFound from './components/Pages/NotFound.tsx'
import Layouts from './components/Layouts.tsx'
import Registration from './components/Layouts/Registration.tsx'
import Login from './components/Layouts/Login.tsx'
import Articles from './components/Pages/Articles.tsx'
import SingleArticle from './components/Pages/SingleArticle.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<SingleArticle />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
