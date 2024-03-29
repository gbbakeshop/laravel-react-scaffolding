import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import TopNavbarLink from '../components/top-navbar-link'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'




export default function TopNavbarSection() {
  const {pathname } = useLocation()
  const {value} = useSelector((state) => state.app)
 const path = pathname.split('/')[1]
  const navigation = [
    { name: 'Dashboard', href: '/', current: path == '' },
    // { name: 'Team', href: '/team', current: path == 'team' },
    { name: 'Projects', href: '/project', current: path == 'project' },
    // { name: 'Calendar', href: '/calendar', current: path == 'calendar' },
  ]
  useEffect(() => {
    console.log(path)
  }, []);
  return (
    <Disclosure as="nav" className="bg-purple-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    
                    {navigation.map((item,index) => (
                        <TopNavbarLink 
                        key={index}
                        name={item.name}
                        href={item.href}
                        current={item.current}
                        />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}
