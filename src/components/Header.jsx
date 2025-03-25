import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header>
        <div className='bg-black w-full text-white flex justify-end'>gokindiainfo@goklogistics.com</div>
        <div className='flex justify-between'>
          <div><img src="image.jpg" alt="logo" /></div>
          <div>
            <p>social page</p>
            <p>call us: <span>9455458888</span></p>
          </div>
        </div>
      <Navbar/>
    </header>
  )
}

export default Header
