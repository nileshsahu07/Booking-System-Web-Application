import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {logout} from "../../redux/slices/LoginSlice"
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material'

export default function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

const name = localStorage.getItem('name')

const navigation = [
  { name: 'Home', url: '/', current: false },
  { name: 'Services', url: '/services', current: false },
  { name: 'Contact Us', url: '/contact', current: false },
  { name: 'Bookings', url: '/userBookings', current: false },
  { name: 'Log Out', url:'/login', action: ()=>{
    dispatch(logout());
    navigate("/login");
  }},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const handleItemClick = (item,event) => {
  if (item.action) {
    event.preventDefault();
    item.action();
  } 
};

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#0b4664] ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-11 w-11"
                        src="https://img.freepik.com/free-vector/barbershop-hair-stylist-logotype_24908-61467.jpg?w=740&t=st=1722599334~exp=1722599934~hmac=34faa977e4386afbabdfbac13ea9db850fcb8b77cd30d9af4cfa841e29035059"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4" >
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.url}
                            onClick={(event) => handleItemClick(item, event)}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <Typography variant='h6' className='text-white font-bold '>Welcome {name}</Typography>
                     
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <Typography variant='h6' className='text-white font-bold '>Welcome {name}</Typography>
                  {navigation.map((item,index) => (
                    <div key={index}>
                    <Link
                      key={item.name}
                      as="a"
                      to={item.url}
                      onClick={(event) => handleItemClick(item, event)}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      >
                      {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
               
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
