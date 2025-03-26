import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header>
      <div className='bg-black'>
        <div className='max-w-[1170px] mx-auto text-white flex justify-end px-8 py-4'>gokindiainfo@goklogistics.com</div>
      </div>
        <div className='flex justify-between max-w-[1170px] mx-auto px-8 py-4'>
          <div><img src="image.jpg" alt="logo" /></div>
          <div className=''>
            <p>social page</p>
            <p>call us: <span>9455458888</span></p>
          </div>
        </div>
      <Navbar/>
    </header>
  )
}

export default Header
