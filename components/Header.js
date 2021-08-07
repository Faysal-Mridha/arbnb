import Image from 'next/image'
import { SearchIcon,GlobeAltIcon,UserCircleIcon,MenuIcon,UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import {useRouter} from 'next/router'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header({placeholder}) {
    const [input, setInput] = useState('');
    const [startDate,setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuests,setNumOfGuests] =useState(1)

    const router = useRouter();

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
    }

    const handleSelect = (ranges) => {
       setStartDate(ranges.selection.startDate)
       setEndDate(ranges.selection.endDate)
    }

    const handleClick = () => {
        // router.push({
        //     pathname: "/search",
        //     query: {
        //         location: input,
        //         startDate: startDate.toISOString(),
        //         endDate: endDate.toISOString(),
        //         numOfGuests,
        //     }
        // });

        // TODO another way

        router.push(`/search?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGust=${numOfGuests}`)
    }


    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto animate-bounce'>
                {/* <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' /> */}

                <Image onClick={()=> router.push('/')} src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* middle */}
            <div className="flex items-center border-2 rounded-full py-2">
                <input value={input} onChange={(e)=> setInput(e.target.value)} className='outline-none pl-5 bg-transparent flex-grow text-gray-600 placeholder-gray-700' type="text" placeholder={placeholder || 'Start your Search.'} />

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

            {input && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={['#FD5861']}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

                        <UsersIcon className="h-5" />

                        <input type="number" value={numOfGuests} onChange={(e) => setNumOfGuests(e.target.value)} max={99} min={1} className="w-12 pl-2 text-lg outline-none text-red-400"/>

                    </div>

                    <div className='flex items-center justify-around'>
                        <button onClick={()=> setInput('')} className="text-gray-500 focus:outline-none">Cancel</button>
                        <button onClick={handleClick} className="text-red-400 font-semibold focus:outline-none">Search</button>
                    </div>

                </div>
            )}

        </header>
    )
}

export default Header
