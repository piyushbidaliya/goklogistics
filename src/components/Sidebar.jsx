import React from 'react'
import { Link } from 'react-router-dom'
import { FcAdvance } from "react-icons/fc";
function Sidebar() {
  return (
    <div>
      <h2 className='text-blue-500 text-center lg:text-start'>Our Location & Network</h2>
        <div>
            <Link to="/domestic" ><p className='py-4 px-4 mb-1 rounded-sm bg-blue-400 text-white w-fit'>Domestic Network</p></Link>
            <Link to="/international" ><p className='py-4 px-4 mb-1 rounded-sm bg-blue-400 text-white w-fit'>International Network</p></Link>
        </div>

        <div>
            <h3 className='text-orange-500'>Product Services</h3>
            <ul>
                <li className='inline-block pr-2 '><Link to="#"><FcAdvance className='inline-block mr-2'/>Freight Forwarding</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Consolidation & Deconsolidation</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Warehousing Services</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Express Services</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Transportation Management</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Vendor Managed Inventory</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Inward Logistics Integration</Link></li>
                <li className='inline-block pr-2'><Link to="#"><FcAdvance className='inline-block mr-2'/>Project Cargo and Break Bulk</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Sidebar
