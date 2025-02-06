import React from 'react'
import Main from './_components/main'
import Courses from './_components/courses'

const MainPage = () => {
  return (
    <div className='flex flex-col space-y-32'>
      <Main />
      <Courses />
    </div>
  )
}

export default MainPage