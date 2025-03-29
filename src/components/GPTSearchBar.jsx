import React from 'react'
import { lang } from '../utils/languageConstants' 

const GPTSearchBar = () => {
    return (
        <div className='pt-[15%]  flex justify-center '>
            <form action="" className='p-4 w-2/4 bg-black grid grid-cols-12'>
                <input
                    className='p-3 rounded m-1 col-span-8'
                    type="text" placeholder={lang.en.gptSearchPLaceholder} />

                <button className='bg-red-700 m-1 font-semibold text-white rounded px-3 py-3 col-span-4'>{lang.en.Search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar