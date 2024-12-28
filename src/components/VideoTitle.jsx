import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='text-4xl text-white font-bold'>{title}</h1>
        <p className='text-sm text-white font-semibold mt-4 w-1/4'>{overview}</p>
        <div className='my-4 flex space-x-2'>
            <button className='bg-white text-md px-4 py-2 rounded flex items-center hover:bg-opacity-80'><PlayArrowIcon/> Play</button>
            <button className='bg-gray-500 text-md text-white px-4 py-2 bg-opacity-50 rounded flex gap-1 items-center'><InfoOutlinedIcon /> Info</button>
        </div>
    </div>
  )
}

export default VideoTitle