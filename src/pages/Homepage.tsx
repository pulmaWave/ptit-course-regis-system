import React from 'react'
import { Search } from 'lucide-react'
import CourseList from '@/components/course-list'
import RegistrationSummary from '@/components/registration-summary'
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
  return (
    <div className='flex min-h-screen flex-col'>
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
                    <CourseList courseList={courseList} schedule regisTime />
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
    </div>
  )
}

export default HomePage
