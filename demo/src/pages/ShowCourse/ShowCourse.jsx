import { useEffect } from 'react'
import './ShowCourse.css'
import {useParams} from 'react-router-dom'

export default function ShowCourse() {
    const {course} = useParams()

    useEffect(() => {
        console.log(course);
    },[course])

  return (
    <div className="showCourse"></div>
  )
}
