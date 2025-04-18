import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineSearch } from 'react-icons/md';
import { setOpenSidebar } from '../redux/slices/authSlice';
import NotificationPanel from './NotificationPanel';
import UserAvatar from './UserAvatar';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <div className='nav flex justify-between items-center bg-white px-4 py-3 2xl:p-4 sticky z-10 top-0'>
            <div className='flex gap-4'>
                {/* Sidebar Toggle Button */}
                <button onClick={() => dispatch(setOpenSidebar(true))} className='text-2xl text-gray-500 block md:hidden'>
                    ☰
                </button>

                {/* Search Bar */}
                <div className='search w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
                    <MdOutlineSearch className='text-gray-500 text-xl' />
                    <input
                        type="text"
                        placeholder='Search...'
                        className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
                    />
                </div>
            </div>

            {/* Notification & User Avatar */}
            <div className='flex gap-2 items-center'>
                <NotificationPanel />
                <UserAvatar />
            </div>
        </div>
    );
};

export default Navbar;
