import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchParamsComponent from './components/SearchParamsComponent.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchParamsComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
