import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

// Pages
import HomePage from '@/pages/Homepage'
import NotFoundPage from '@/pages/NotFound'

// Auth
import { withAuth } from '@/services/withAuth'
import LoginPage from '@/pages/Login'
const ProtectedHomepage = withAuth(HomePage)
// const ProtectedLoginPage = withAuth(LoginPage)

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes với MainLayout */}
        <Route element={<MainLayout />}>
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* Auth routes với AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>

        {/* Protected routes với MainLayout */}
        <Route>
          <Route path='/' element={<ProtectedHomepage />} />
          {/* <Route path='/login' element={<ProtectedLoginPage />} /> */}
          {/* <Route path='/schedule' element={<ProtectedSchedulePage />} />
          <Route path='/profile' element={<ProtectedProfilePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
