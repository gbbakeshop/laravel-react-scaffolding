import React from 'react'
import CalendarCardComponent from '../components/calendar-card-component'

export default function CalendarCardSection() {
  return (
    <div className='w-screen h-full'>
        <div className='flex w-full items-center justify-evenly gap-5 my-2'>
        <CalendarCardComponent />
        <CalendarCardComponent />
        <CalendarCardComponent />
        <CalendarCardComponent />
        </div>
    </div>
  )
}
