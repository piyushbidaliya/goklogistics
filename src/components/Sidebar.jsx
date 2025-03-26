import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <div>
            <Link to="#" className='py-4 bg-blue-400 text-white'>Domestic Network</Link>
            <Link to="#" className='py-4 bg-blue-400 text-white'>International Network</Link>
        </div>

        <div>
            <h3 className='text-orange-500'>Product Services</h3>
            <ul>
                <li><Link to="#">Freight Forwarding</Link></li>
                <li><Link to="#">Consolidation & Deconsolidation</Link></li>
                <li><Link to="#">Warehousing Services</Link></li>
                <li><Link to="#">Express Services</Link></li>
                <li><Link to="#">Transportation Management</Link></li>
                <li><Link to="#">Vendor Managed Inventory</Link></li>
                <li><Link to="#">Inward Logistics Integration</Link></li>
                <li><Link to="#">Project Cargo and Break Bulk</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Sidebar
