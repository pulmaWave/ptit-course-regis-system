import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { logout } from '@/services/auth'
import Button from '@/components/button'

const MainLayout: React.FC = () => {
  const navigate = useNavigate()
  const [active] = useState(true)

  const handleLogout = async () => {
    const logged = await logout()
    if (logged) {
      navigate('/login')
    }
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <Link to='/' className='flex items-center gap-2'>
            <GraduationCap className='h-6 w-6 text-red-500' />
            <span className='text-xl font-bold text-red-500'>PTIT</span>
          </Link>
          <nav className='hidden md:flex gap-6'>
            <Link
              to='/'
              className='text-sm font-medium transition-colors text-red-600 hover:text-red-600'
            >
              Trang chủ
            </Link>
            <Link
              to='schedule'
              className='text-sm font-medium transition-colors hover:text-red-600'
            >
              Lịch học
            </Link>
            <Link
              to='/result'
              className='text-sm font-medium transition-colors hover:text-red-600'
            >
              Kết quả học tập
            </Link>
          </nav>
          <div className='flex items-center gap-4'>
            {active ? (
              <Button size='sm' onClick={handleLogout}>
                Đăng xuất
              </Button>
            ) : (
              <Button size='sm'>Đăng nhập</Button>
            )}
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer className='border-t py-6 md:py-0'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row'>
          <p className='text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} Hệ thống đăng ký môn học. Bản
            quyền thuộc về Trường Đại học.
          </p>
          <div className='flex gap-4'>
            {['Điều khoản', 'Chính sách', 'Liên hệ'].map((item) => (
              <a
                key={item}
                href='#'
                className='text-sm text-gray-500 hover:text-gray-900'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
