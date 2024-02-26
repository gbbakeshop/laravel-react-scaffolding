import React from 'react'
import { Link, Outlet as Children } from 'react-router-dom'
import TopNavbarSection from '../sections/top-navbar-section'
import FooterSection from '../sections/footer-section'
import { useSelector } from 'react-redux'

export default function GuestLayout() {
    const {value} = useSelector((state) => state.app)
  
    return (
        <div className='flex flex-col'>
            <div className='flex-none'>
                <TopNavbarSection />
            </div>
            <div className='flex-1'>
                <Children />
            </div>
            <div className='flex-none'>
                <FooterSection />
            </div>
        </div>
    )
}
