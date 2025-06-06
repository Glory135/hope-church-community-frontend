import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import TopBar from './components/sections/TopBar'
import HomePage from './pages/HomePage'
import Footer from './components/sections/Footer'
import ScrollToHashElement from './components/Scrollash'
import AboutPage from './pages/AboutPage'
import ActivitiesPAge from './pages/ActivitiesPAge'
import ProgramsPage from './pages/ProgramsPage'
import ContactUsPage from './pages/ContactUsPage'
// import ScrollToTop from './components/crollTotop'

function App() {

  return (
    <main className='w-full min-h-screen h-auto flex flex-col items-center'>
      <BrowserRouter>
        <ScrollToHashElement />
        {/* <ScrollToTop /> */}
        <TopBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/activities' element={<ActivitiesPAge />} />
          <Route path='/programs' element={<ProgramsPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
