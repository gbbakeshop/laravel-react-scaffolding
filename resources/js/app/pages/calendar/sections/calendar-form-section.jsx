import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function CalendarFormController() {
    const [form,setForm] = useState({
        name:'',
        age:0,
        address:''
    })
 
  return (
    <div className='flex flex-col m-2 items-center justify-center'>
       
        <div className='w-1/4'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input
            onChange={(e)=>setForm({...form,name:e.target.value})}
            type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
        </div>
        <div className='w-1/4'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input 
              onChange={(e)=>setForm({...form,age:e.target.value})}
            type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="age" required />
        </div>
        <div className='w-1/4'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input 
              onChange={(e)=>setForm({...form,address:e.target.value})}
            type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required />
        </div>
        <button className='bg-red-500 hover:bg-red-700 text-white p-3 rounded-lg my-3 w-1/4'>
            SUBMIT
        </button>
    </div>
  )
}
