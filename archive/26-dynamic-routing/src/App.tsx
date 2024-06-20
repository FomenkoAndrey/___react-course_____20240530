import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contacts from './components/Contacts.tsx'
import NotFound from './components/NotFound.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import { ComponentType } from 'react'
import Admin from './components/Admin.tsx'

interface RouteInterface {
  path: string
  component: ComponentType
  name: string
}

export const routes: RouteInterface[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contacts', component: Contacts, name: 'Contacts' },
  { path: '/admin', component: Admin, name: 'Admin' },
  { path: '*', component: NotFound, name: 'Not Found' }
]

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route: RouteInterface, index: number) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
