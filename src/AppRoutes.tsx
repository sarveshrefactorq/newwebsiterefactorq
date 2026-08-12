import { Route, Routes } from "react-router-dom"

import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { ScrollToTop } from "./components/layout/ScrollToTop"

import { AboutPage } from "./pages/AboutPage"
import { AviationPage } from "./pages/AviationPage"
import { BlogDetailPage } from "./pages/BlogDetailPage"
import { BlogsPage } from "./pages/BlogsPage"
import { CareersPage } from "./pages/CareersPage"
import { CaseStudiesPage } from "./pages/CaseStudiesPage"
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage"
import { ContactPage } from "./pages/ContactPage"
import { CulturePage } from "./pages/CulturePage"
import { HomePage } from "./pages/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ProductDetailPage } from "./pages/ProductDetailPage"
import { ProductsOverviewPage } from "./pages/ProductsOverviewPage"
import { ServiceDetailPage } from "./pages/ServiceDetailPage"
import { ServicesOverviewPage } from "./pages/ServicesOverviewPage"

export function AppRoutes() {
  return (
    <div className="min-h-screen bg-[var(--bg-soft)] text-[var(--ink)]">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ServicesOverviewPage />} path="/services" />
          <Route element={<ServiceDetailPage />} path="/services/:slug" />
          <Route element={<ProductsOverviewPage />} path="/products" />
          <Route element={<ProductDetailPage />} path="/products/:slug" />
          <Route element={<AviationPage />} path="/aviation" />
          <Route element={<CulturePage />} path="/culture" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<CaseStudiesPage />} path="/case-studies" />
          <Route element={<CaseStudyDetailPage />} path="/case-studies/:slug" />
          <Route element={<BlogsPage />} path="/blogs" />
          <Route element={<BlogDetailPage />} path="/blogs/:slug" />
          <Route element={<CareersPage />} path="/careers" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
