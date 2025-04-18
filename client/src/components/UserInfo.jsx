import React, { Fragment } from 'react'
import { getInitials } from '../utils'
import {Popover, Transition} from "@headlessui/react"

const UserInfo = ({user}) => {
  return (
    <div className='user px-4'>
        <Popover className="ralative">{({open}) => <>

        <Popover.Button>
            <span className='group inline-flex items-center outline-none '>
                {
                    getInitials(user ?. name )
                }
            </span>

        </Popover.Button>

        <Transition 
        as = {Fragment}
        enter = "transition ease-out duration-200"
        enterForm = "opacity-0 translate y-1"
        enterTo = "opacity-100 transalte-y-0"
        leave = "transition ease-in duration-150"
        leaveForm = "opacity-100 translate-y-0" 
        leaveTo = "opacity-0 translate-y-1">
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-90 max-w-sm translate-x-1/2 
            transform px-4 sm:px-0 ">
                <div className='flex items-center gap-4 rounded-lg shadow-lg bg-white p-4 '>
                    <div className='w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center text-2xl '>
                        <span>
                            {
                                getInitials(user?.name)
                            }

                        </span>

                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <p className='text-black text-xl font-bold'>{user.name}</p>
                        <span className='text-base text-gray-500'>
                            {user.title}
                        </span>

                        <span className=' text-blue-500'>
                            {user.email}
                        </span>

                    </div>

                </div>

            </Popover.Panel>
            
        </Transition>
        </> }

        </Popover>
      
    </div>
  )
}

export default UserInfo
