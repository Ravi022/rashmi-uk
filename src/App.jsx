import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { GtmPageTracker } from './components/GtmPageTracker'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToTop } from './components/ScrollToTop'
import { RouteTransition } from './components/RouteTransition'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { GlobalPresencePage } from './pages/GlobalPresencePage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsPage } from './pages/ProductsPage'
import { QualityPage } from './pages/QualityPage'
import { SustainabilityPage } from './pages/SustainabilityPage'

function App() {
  return (
    <div className="min-h-screen w-full min-w-0 max-w-[100vw] overflow-x-clip bg-slate-50 text-slate-800">
      <GtmPageTracker />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <RouteTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productSlug" element={<ProductDetailPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/global-presence" element={<GlobalPresencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </RouteTransition>
      <Footer />
    </div>
  )
}

export default App
