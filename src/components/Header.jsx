import React from 'react'
import Navbar from './Navbar'
import worldmap from '../assets/worldmap.png'
import linkedin from '../assets/linkedin.svg'
import telephone from '../assets/telephone.png'
function Header() {
  return (
    <header className='bg-contain bg-no-repeat bg-right w-full' style={{
      backgroundImage: `url(${worldmap})`
    }}>
      <div className='bg-black'>
        <div className='max-w-[1170px] mx-auto text-white flex justify-end px-8 py-4'>gokindiainfo@goklogistics.com</div>
      </div>
      <div className="flex justify-between items-center max-w-[1170px] mx-auto px-8 py-4">
        <div>
          <img src="image.jpg" alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-1">
            social page <img src={linkedin} alt="linkedin icon" className="w-8 h-8" />
          </p>
          <p className='p-0 m-0 leading-2 text-[14px] font-semibold'>Call Us:</p>
          <p className='p-0 m-0 leading-2 flex items-center gap-2'><img src={telephone} alt="telephone icon" className="w-5 h-5" />+91-11-4665-6500</p>
      </div>
</div>

      <Navbar/>
    </header>
  )
}

export default Header;