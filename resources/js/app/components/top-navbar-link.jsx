import React from 'react'
import { Link, } from 'react-router-dom'

export default function TopNavbarLink({ name, href, current }) {


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Link to={href}
            className={classNames(
                current ? 'bg-white text-purple-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={current ? 'page' : undefined}
        >
            {name}
        </Link>
    )
}
