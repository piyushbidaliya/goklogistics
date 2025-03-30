import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'



function Freight() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div className='lg:w-3/4 w-full'>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6'>Freight Forwarding</h2>
            <p>On the strength of the vast volumes that NTL Logistics handles on a global basis, we have a marked edge that enables us to obtain highly competitive and customized tariffs and services from Carriers of global repute and coverage in bulk cargo handling. This enables us to share these benefits with customers and, which in turn, will allow them to be competitive in the global market place and grow their business further. Be it domestic distribution or else, we provide services which are highly effective. <br />
            Our bouquet of services within Freight Forwarding include all activities that are a part of Air Freight logistics and Sea Freight service or Ocean Freight Forwarding, along with customs clearance and pick up services from factory and door delivery at destination. Some of the activities that are a part of our freight forwarding services include-
            </p>
            <ul className='list-disc'>
                <li className='ml-5'>AMS(Advance Manifests Systems) Filing / ISF(Importer Security Filing)</li>
                <li className='ml-5'>Shipment Planning and Booking</li>
                <li className='ml-5'>Import and Export Documentation</li>
                <li className='ml-5'>Import and Export Customs Clearance</li>
                <li className='ml-5'>Ocean Transportation Intermediary Services</li>
                <li className='ml-5'>Insurance Services</li>
                <li className='ml-5'>Tracking, Tracing, & Reporting</li>
                <li className='ml-5'>Destination Customs Clearance</li>
                <li className='ml-5'>Delivery Verification</li>
                <li className='ml-5'>Delivery to final destination</li>
                <li className='ml-5'>Dangerous Goods Handling</li>
            </ul>
            <p className='mt-8'>With NTL Logistics own global network and through its membership in networks such as WCA(World Cargo Alliance), GPLN(Global Project Logistics Network), CGLN(China Global Logistics Network), we have a truly global coverage and can accept any type of cargo to almost all countries or ports worldwide irrespective of the terms of trade and deliver seamless results over a range of services. NTL provides Air Freight logistic service which is one of the best in freight forwarding companies</p>
        </div>
      </div>

    </div>
  )
}

export default Freight
