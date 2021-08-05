import Image from 'next/image'
import { SearchIcon,GlobeAltIcon,UserCircleIcon,MenuIcon,UsersIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto animate-bounce'>
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
                {/* <Image src="/img/logo.png" layout='fill' objectFit='contain' objectPosition='left' /> */}
            </div>
            {/* middle */}
            <div className="flex items-center border-2 rounded-full py-2">
                <input className='outline-none pl-5 bg-transparent flex-grow text-gray-600 placeholder-gray-700' type="text" placeholder='Start your Search.' />

                <SearchIcon className='hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer h-8 md:mx-2' />
            </div>
            {/* right */}
            <div className='flex items-center text-gray-500 space-x-4 justify-end'>
                <p className='hidden md:inline'>Become host</p>
                    <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header
