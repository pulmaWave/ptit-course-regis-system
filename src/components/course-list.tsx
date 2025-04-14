import Course from './ui/course'
import { CourseType } from '@/shared/types'

export default function CourseList(props: {
  courseList: CourseType[]
  schedule?: boolean
  regisTime?: boolean
}) {
  const { courseList, schedule, regisTime } = props
  return (
    <div>
      {courseList.length > 0 ? (
        <div className='space-y-3'>
          {courseList.map((course) => (
            <Course key={course.id} course={course} regisTime={regisTime} />
          ))}
        </div>
      ) : (
        <div className='text-center py-6 text-muted-foreground'>
          {schedule && <p className='text-sm'>Không có lớp học</p>}
        </div>
      )}
    </div>
  )
}
