import React from 'react'
import { CloudDownloadIcon,DatabaseIcon,PaperAirplaneIcon,ServerIcon } from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png'
const Main = () => {
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-between">
         <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech BraND</p>
                <button className='py-4 my-2 rounded-lg px-2'>Get started</button>
            </div>
         </div>
    </div>
  )
}

export default Main