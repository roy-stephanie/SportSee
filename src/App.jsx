import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Error404 from './components/error404/Error404'
import Profil from './components/profil/Profil'
import Logo from './components/logo/Logo'
import './init.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div className="Profil Error"><Logo /></div>} />
          <Route path="profil/:id" element={<Profil />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
