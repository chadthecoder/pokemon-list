'use client'

interface SearchProps
{
  pokemonNames: any
}

import {AiOutlineSearch} from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
//import { words } from '@/lib/data'
// Remember to import words or whatever you're using to store all the words the user can search for

export default function Searchbar({pokemonNames} : SearchProps) {

    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    const [query] = useDebounce(searchText, 500)
    
    useEffect(() => {
        router.push(`/?search=${query}`)
    }, [query, router])

    //const [activeSearch, setActiveSearch] = useState([])

    /* const handleSearch = (e) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
         setActiveSearch(pokemonNames.filter((eventData) => {
            if(e.target.value==""){
                return eventData;
            }
            else if(eventData.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return eventData;
            }
        })) 
        //setActiveSearch(pokemonNames.filter(w => w.includes(e.target.value)).slice(0,8))
    } */

  return (
    <form className='w-[500px] relative'>
        <div className="relative">
            <input type="search" placeholder='Type Here' className='w-full p-4 rounded-full bg-slate-800' onChange={(e) => setSearchText(e.target.value)}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full'>
                <AiOutlineSearch />
            </button>
        </div>

        {/* {
            activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {
                        activeSearch.map(s => (
                            <span>{s}</span>
                        ))
                    }
                </div>
            )
        } */}


        
    </form>
  )
}