import { CourseType } from '@/shared/types'
import { Calendar, Check, Clock, Plus } from 'lucide-react'
import Badge from './badge'
import Button from '../button'
import { useState } from 'react'

const Course = (props: CourseType) => {
  const course = props

  const [selectedCourses, setSelectedCourses] = useState<string[]>([])

  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    )
  }

  return (
    <div>
      <div key={course.id} className='rounded-md border p-3'>
        <div className='flex justify-between'>
          <div className='flex gap-3 items-center'>
            <div className='font-medium text-sm text-red-600'>
              {course.name}
            </div>
            <Badge>{course.type}</Badge>
          </div>
          <Button
            variant={
              selectedCourses.includes(course.id) ? 'default' : 'outline'
            }
            size='sm'
            onClick={() => toggleCourseSelection(course.id)}
          >
            {selectedCourses.includes(course.id) ? (
              <>
                <Check className='mr-1 h-4 w-4' /> Đã chọn
              </>
            ) : (
              <>
                <Plus className='mr-1 h-4 w-4' /> Chọn
              </>
            )}
          </Button>
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
    </div>
  )
}

export default Course
