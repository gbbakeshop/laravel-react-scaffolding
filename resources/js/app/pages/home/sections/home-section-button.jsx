import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from '../../../redux/app-slice'

export default function HomeSectionButton() {
const {value} = useSelector((state) => state.app)
const dispatch = useDispatch()
    function click_me() {
        dispatch(incrementByAmount(1))
    }
  return (
    <div>
        <button
        onClick={click_me}
        className='bg-red-400 hover:bg-red-700 p-2 text-white rounded-lg m-3'>
Click me
        </button>
        <div className='text-5xl'>
        {value}
        </div>
    </div>
  )
}
