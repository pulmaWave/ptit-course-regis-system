import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

// Pages
import HomePage from '@/pages/Homepage'
import NotFoundPage from '@/pages/NotFound'
import Schedule from './pages/Schedule'

// Auth
import { withAuth } from '@/services/withAuth'
import LoginPage from '@/pages/Login'
const ProtectedHomepage = withAuth(HomePage)
// const ProtectedLoginPage = withAuth(LoginPage)

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path='/' element={<ProtectedHomepage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path='/schedule' element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
