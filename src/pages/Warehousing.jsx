import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'



function Warehousing() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div className='lg:w-3/4 w-full'>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6'>Warehousing Services</h2>
            <p>Our warehousing services enable our clients to reduce the shipping costs. We have huge state of art 250,000 sq. ft warehouse in Salem for keeping large number of inventories. Here we lease and operate warehouses at different locations in the country for various customers across different industry, from FMCG to automobile components to medical equipments and paper products. The Salem warehouse has a covered floor area of 158,000 square feet that is further made flexible with racking solutions that can be adjusted to specific customer needs. There are adequate handling equipments provided for, to cater to different handling and operational requirements.
<br /> <br />
The warehouse is backed up by a tried and tested Warehouse Management System (WMS) to ensure prompt MIS to all concerned in real-time so that stock-keeping and reconciliation becomes an effortless exercise. Our highly skilled staff keeps a check on what inventory is needed where and at what time. Depending upon the changes in the demand, NTL provides warehousing services to its clients. NTL believes in providing excellent services to its clients as it is very important to have good supply chain management in terms of warehousing etc, to carry out any business in the most effective way. Any business can only be successful only if it has excellent logistic services.
<br /> <br />
In addition to the state-of-the-art 250,000 sq ft warehouse in Salem, we lease and operate warehouses at different locations in the country for various customers across different industry verticles from FMCG to automobile components to medical equipment and paper products.
<br /> <br />
The Salem warehouse has a covered floor area of 158,500 square feet that is further made flexible with racking solutions that can be adjusted to specific customer needs. There are adequate handling equipments provided for, to cater to different handling and operational requirements.
<br /> <br />
The warehouse is backed up by a tried and tested Warehouse Management System (WMS) to ensure prompt MIS to all concerned in real-time so that stock-keeping and reconciliation becomes an effortless exercise.</p>
        </div>
        </div>
    </div>
  )
}

export default Warehousing;
