import { Outlet } from "react-router-dom"
import Header from "./Header"
import NavTabs from "./NavTabs"
import Footer from "./Footer"

const Layout = () => {
  return (
      <div className="App">
          <Header title="Store title" />
          <NavTabs  />
          <Outlet />
          <Footer />
      </div>
  )
}

export default Layout