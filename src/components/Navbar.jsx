import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <nav className='bg-black'>
      <ul className="list-none max-w-[1170px] mx-auto text-white px-8">
      <Link to="/"><li className="inline-block py-3 px-7 hover:bg-blue-400 border-r-[0.5px] border-r-[#383838]">Home</li></Link>

        <li
          className="hover:bg-blue-400 inline-block py-3 px-7 relative border-r-[0.5px] border-r-[#383838] cursor-pointer"
          onMouseEnter={() => setIsAboutUsOpen(true)}
          onMouseLeave={() => setIsAboutUsOpen(false)}
        >
          About Us
          {isAboutUsOpen && (
            <ul className="absolute z-[10000] top-12 left-0 bg-black text-white border-r-[0.5px] border-r-[#383838]">
              <li className="block py-3 px-7 hover:bg-blue-400">Overview</li>
              <li className="block py-3 px-7 hover:bg-blue-400">Mission & Vision</li>
              <li className="block py-3 px-7 hover:bg-blue-400">Advantage</li>
              <li className="block py-3 px-7 hover:bg-blue-400">Investor Relations</li>
            </ul>
          )}
        </li>

        <li
          className="inline-block py-3 px-7 relative border-r-[0.5px] border-r-[#383838] hover:bg-blue-400 cursor-pointer"
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}
        >
          Product and Services
          {isProductOpen && (
            <ul className="absolute z-[10000] top-12 left-0 bg-black text-white border-r-[0.5px] border-r-[#383838]">
              <Link to="/freight"><li className="block py-3 px-7 hover:bg-blue-400">Freight Forwarding</li></Link>
              <Link to="/shipping"><li className="block py-3 px-7 hover:bg-blue-400">Shipping Schedule</li></Link>
              <Link to="/warehouse"><li className="block py-3 px-7 hover:bg-blue-400">Warehousing Services</li></Link>
              <Link to="/express"><li className="block py-3 px-7 hover:bg-blue-400">Express Services</li></Link>
              <Link to="/transport"><li className="block py-3 px-7 hover:bg-blue-400">Transportation Management</li></Link>
              <li className="block py-3 px-7 hover:bg-blue-400">Vendor Managed Inventory</li>
              <li className="block py-3 px-7 hover:bg-blue-400">Inward Logistics Integration</li>
              <li className="block py-3 px-7 hover:bg-blue-400">Project Cargo and Break Bulk</li>
            </ul>
          )}
        </li>

        <li
          className="inline-block py-3 px-7 relative border-r-[0.5px] border-r-[#383838] hover:bg-blue-400 cursor-pointer"
          onMouseEnter={() => setIsLocationOpen(true)}
          onMouseLeave={() => setIsLocationOpen(false)}
        >
          Our Location and Network
          {isLocationOpen && (
            <ul className="absolute z-[10000] top-12 left-0 bg-black text-white border-r-[0.5px] border-r-[#383838]">
              <Link to="/domestic"><li className="block py-3 px-7 hover:bg-blue-400">Domestic</li></Link>
              <Link to="/international"><li className="block py-3 px-7 hover:bg-blue-400">International</li></Link>
            </ul>
          )}
        </li>

        <Link to="/career"><li className="inline-block py-3 px-7 hover:bg-blue-400 border-r-[0.5px] border-r-[#383838]">Career</li></Link>
        <Link to="/contact"><li className="inline-block py-3 px-7 hover:bg-blue-400 border-r-[0.5px] border-r-[#383838]">Contact Us</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
