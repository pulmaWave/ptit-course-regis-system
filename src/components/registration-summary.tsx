import { Calendar, Clock } from 'lucide-react'

export default function RegistrationSummary() {
  // This would typically be connected to the selected courses state
  // For demo purposes, we'll show some sample selected courses
  const selectedCourses = [
    {
      id: 'CSC101',
      name: 'Nhập môn lập trình',
      credits: 3,
      schedule: 'Thứ 2, 7:30 - 9:30',
      location: 'Phòng A101'
    },
    {
      id: 'MTH101',
      name: 'Giải tích 1',
      credits: 3,
      schedule: 'Thứ 5, 7:30 - 9:30',
      location: 'Phòng D401'
    }
  ]

  const totalCredits = selectedCourses.reduce(
    (sum, course) => sum + course.credits,
    0
  )

  return (
    <div>
      {selectedCourses.length > 0 ? (
        <div className='space-y-3'>
          {selectedCourses.map((course) => (
            <div key={course.id} className='rounded-md border p-3'>
              <div className='font-medium text-sm text-red-600'>
                {course.name}
              </div>
              <div className='text-xs text-muted-foreground mt-1'>
                Mã môn: {course.id} | TC: {course.credits}
              </div>
              <div className='flex items-center text-xs mt-2'>
                <Calendar className='mr-1 h-3 w-3 text-muted-foreground' />
                <span>{course.schedule}</span>
              </div>
              <div className='flex items-center text-xs mt-1'>
                <Clock className='mr-1 h-3 w-3 text-muted-foreground' />
                <span>{course.location}</span>
              </div>
            </div>
          ))}

          <div className='pt-3 border-t mt-3'>
            <div className='flex justify-between'>
              <span className='font-medium text-red-500'>Tổng số tín chỉ:</span>
              <span className='font-bold'>{totalCredits}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center py-6 text-muted-foreground'>
          <p>Chưa có môn học nào được chọn</p>
          <p className='text-sm mt-1 text-red-500'>
            Vui lòng chọn môn học từ danh sách
          </p>
        </div>
      )}
    </div>
  )
}
