import React, { useState } from 'react';

function Navbar() {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <nav>
      <ul className="list-none bg-black text-white">
        <li className="inline-block p-2.5 hover:bg-blue-400 border-r-[0.5px] border-r-[#383838]">Home</li>

        <li
          className="inline-block p-2.5 relative border-r-[0.5px] border-r-[#383838]"
          onMouseEnter={() => setIsAboutUsOpen(true)}
          onMouseLeave={() => setIsAboutUsOpen(false)}
        >
          About Us
          {isAboutUsOpen && (
            <ul className="absolute left-0 bg-black text-white border-r-[0.5px] border-r-[#383838]">
              <li className="block p-2.5 hover:bg-blue-400">Overview</li>
              <li className="block p-2.5 hover:bg-blue-400">Mission & Vision</li>
              <li className="block p-2.5 hover:bg-blue-400">Advantage</li>
              <li className="block p-2.5 hover:bg-blue-400">Investor Relations</li>
            </ul>
          )}
        </li>

        <li
          className="inline-block p-2.5 relative border-r-[0.5px] border-r-[#383838]"
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}
        >
          Product and Services
          {isProductOpen && (
            <ul className="absolute left-0 bg-black text-white border-r-[0.5px] border-r-[#383838]">
              <li className="block p-2.5 hover:bg-blue-400">Freight Forwarding</li>
              <li className="block p-2.5 hover:bg-blue-400">Shipping Schedule</li>
              <li className="block p-2.5 hover:bg-blue-400">Consolidation & Deconsolidation</li>
              <li className="block p-2.5 hover:bg-blue-400">Warehousing Services</li>
              <li className="block p-2.5 hover:bg-blue-400">Express Services</li>
              <li className="block p-2.5 hover:bg-blue-400">Transportation Management</li>
              <li className="block p-2.5 hover:bg-blue-400">Vendor Managed Inventory</li>
              <li className="block p-2.5 hover:bg-blue-400">Inward Logistics Integration</li>
              <li className="block p-2.5 hover:bg-blue-400">Project Cargo and Break Bulk</li>
            </ul>
          )}
        </li>

        <li
          className="inline-block p-2.5 relative border-r-[0.5px] border-r-[#383838]"
          onMouseEnter={() => setIsLocationOpen(true)}
          onMouseLeave={() => setIsLocationOpen(false)}
        >
          Our Location and Network
          {isLocationOpen && (
            <ul className="absolute left-0 bg-black text-white border-r-[0.5px] border-r-[#383838]">
              <li className="block p-2.5 hover:bg-blue-400">Domestic</li>
              <li className="block p-2.5 hover:bg-blue-400">International</li>
            </ul>
          )}
        </li>

        <li className="inline-block p-2.5 hover:bg-blue-400 border-r-[0.5px] border-r-[#383838]">Career</li>
        <li className="inline-block p-2.5 hover:bg-blue-400 border-r-[0.5px] border-r-[#383838]">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
