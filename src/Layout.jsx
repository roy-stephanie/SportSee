import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import './Layout.css'

function Layout() {
  return (
    <main className="Layout">
      <Header />
      <Outlet />
    </main>
  )
}

export default Layout
