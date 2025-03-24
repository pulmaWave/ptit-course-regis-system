import React, { useState } from 'react'
import { Search, GraduationCap } from 'lucide-react'
import CourseList from '@/components/course-list'
import RegistrationSummary from '@/components/registration-summary'
import { logout } from '@/services/auth'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import { CourseType } from '@/shared/types'

const HomePage: React.FC = () => {
  const courseList: CourseType[] = [
    {
      id: 'CSC101',
      name: 'Nhập môn lập trình',
      credits: 3,
      schedule: 'Thứ 2, 7:30 - 9:30',
      location: 'Phòng A101',
      type: 'Chuyên ngành'
    },
    {
      id: 'MTH101',
      name: 'Giải tích 1',
      credits: 3,
      schedule: 'Thứ 5, 7:30 - 9:30',
      location: 'Phòng D401',
      type: 'Đại cương'
    },
    {
      id: 'MTH102',
      name: 'Vật lý 2',
      credits: 3,
      schedule: 'Thứ 5, 7:30 - 9:30',
      location: 'Phòng D401',
      type: 'Bắt buộc'
    }
  ]
  const navigate = useNavigate()
  const handleLogout = async () => {
    const logged = await logout()
    if (logged) {
      navigate('/login')
    }
  }
  const [active] = useState(true)
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <div className='flex items-center gap-2'>
            <GraduationCap className='h-6 w-6 text-red-500' />
            <span className='text-xl font-bold text-red-500'>PTIT</span>
          </div>
          <nav className='hidden md:flex gap-6'>
            <a
              href='#'
              className='text-sm font-medium transition-colors text-red-600 hover:text-red-600'
            >
              Trang chủ
            </a>
            <a
              href='#'
              className='text-sm font-medium transition-colors hover:text-red-600'
            >
              Lịch học
            </a>
            <a
              href='#'
              className='text-sm font-medium transition-colors hover:text-red-600'
            >
              Kết quả học tập
            </a>
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
      <main className='flex-1 container mx-auto px-4 py-8'>
        <section className='container mx-auto py-6 md:py-10 px-4'>
          <div className='grid gap-6 lg:grid-cols-[1fr_300px]'>
            <div className='space-y-6'>
              <div className='rounded-lg border bg-white p-6'>
                <h2 className='text-xl font-semibold mb-4 text-red-500'>
                  Thông tin sinh viên
                </h2>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div>
                    <p className='text-sm text-red-500'>Mã sinh viên</p>
                    <p className='font-medium'>SV12345</p>
                  </div>
                  <div>
                    <p className='text-sm text-red-500'>Họ và tên</p>
                    <p className='font-medium'>Nguyễn Văn A</p>
                  </div>
                  <div>
                    <p className='text-sm text-red-500'>Ngành học</p>
                    <p className='font-medium'>Công nghệ thông tin</p>
                  </div>
                  <div>
                    <p className='text-sm text-red-500'>Khóa</p>
                    <p className='font-medium'>2023-2027</p>
                  </div>
                </div>
              </div>
              <div className='rounded-lg border bg-white'>
                <div className='flex items-center justify-between p-6 pb-3'>
                  <h2 className='text-xl font-semibold text-red-500'>
                    Danh sách môn học
                  </h2>
                  <div className='relative'>
                    <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-red-400' />
                    <input
                      type='search'
                      placeholder='Tìm kiếm môn học...'
                      className='rounded-md border border-red-300 bg-white pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500'
                    />
                  </div>
                </div>
                <div className='p-6 pt-0'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {[
                      'Tất cả',
                      'Bắt buộc',
                      'Tự chọn',
                      'Đại cương',
                      'Chuyên ngành'
                    ].map((filter) => {
                      const active = filter === 'Tất cả'
                      return (
                        <Button
                          key={filter}
                          variant={active ? 'default' : 'outline'}
                          size='sm'
                        >
                          {filter}
                        </Button>
                      )
                    })}
                  </div>
                  <div>
                    <CourseList {...courseList} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='sticky top-24 rounded-lg border bg-white p-6'>
                <h2 className='text-lg font-semibold mb-4 text-red-500'>
                  Thông tin đăng ký
                </h2>
                <div>
                  {/* "Course list" */}
                  <RegistrationSummary />
                </div>
                <div className='mt-6 text-red-500 flex justify-center'>
                  <Button>Xác nhận đăng ký</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default HomePage
