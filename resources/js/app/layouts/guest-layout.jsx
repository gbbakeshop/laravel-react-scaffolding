import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TopNavbarSection from '../sections/top-navbar-section'
import FooterSection from '../sections/footer-section'

export default function GuestLayout() {
    return (
        <div className='flex flex-col'>
            <div className='flex-none'>
                <TopNavbarSection />
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
            <div className='flex-none'>
                <FooterSection />
            </div>
        </div>
    )
}
