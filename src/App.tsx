import { Outlet } from "react-router-dom"
import { FooterIntro, Header, Footer } from "@components"

function App() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <FooterIntro/>
      <Footer/>
    </>
  )
}

export default App