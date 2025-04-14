import React from 'react'
import CourseList from '@/components/course-list'
import Button from '@/components/button'
import { CourseType } from '@/shared/types'

const Schedule: React.FC = () => {
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
    <main className='flex-1 container mx-auto px-4 py-8'>
      <section className='container mx-auto py-6 md:py-10 px-4'>
        <div className='space-y-6'>
          <div className='rounded-lg border bg-white'>
            <div className='flex items-center justify-between p-6 pb-3'>
              <h2 className='text-xl font-semibold text-red-500'>
                Thời khóa biểu
              </h2>
            </div>
            <div className='p-6 pt-0'>
              <div className='flex flex-wrap gap-2 mb-4'>
                {[
                  'Thứ 2',
                  'Thứ 3',
                  'Thứ 4',
                  'Thứ 5',
                  'Thứ 6',
                  'Thứ 7',
                  'Chủ nhật'
                ].map((filter) => {
                  const active = filter === 'Thứ 2'
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
                <CourseList courseList={courseList} schedule />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Schedule
