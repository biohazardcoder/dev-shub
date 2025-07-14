import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Home } from "./pages/home"
import { Toaster } from "sonner"
import { Error } from "./pages/error"
import Footer from "./components/mods/footer"
const App = () => {

  return (
      <ThemeProvider defaultTheme="system" storageKey="devs-hub-theme">
      <Toaster position="top-center" theme="system" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
      </ThemeProvider>

  )
}

export default App