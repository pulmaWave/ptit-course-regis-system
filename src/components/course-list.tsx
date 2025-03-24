import Course from './ui/course'
import { CourseType } from '@/shared/types'

export default function CourseList(courseList: CourseType[]) {
  return (
    <div>
      {courseList.length > 0 ? (
        <div className='space-y-3'>
          {courseList.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      ) : (
        <div className='text-center py-6 text-muted-foreground'>
          <p className='text-sm mt-1'>
            Hiện không nằm trong thời gian đăng ký, quay lại sau!
          </p>
        </div>
      )}
    </div>
  )
}
