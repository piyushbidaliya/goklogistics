import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'



function Transport() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div className='lg:w-3/4 w-full'>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6 font-bold'>Transportation Management</h2>
            <p className='font-semibold'>A service associated with our warehousing is domestic distribution.</p>
            <ul className='list-disc'>
                <li className='ml-5 text-[14px]'>Movement of the cargo from logistics centres to the customers’ destination</li>
                <li className='ml-5 text-[14px]'>Door delivery to all parts of the country</li>
                <li className='ml-5 text-[14px]'>Express parcel services for larger packages</li>
            </ul>
            <h2 className='my-4 font-bold text-blue-500'>Supply Chain Management</h2>
            <p className='text-[14px]'>The best companies around the world are discovering a powerful new source of competitive advantage. It's called supply chain management and it encompasses all of those integrated activities that bring product to market and create satisfied customers.
<br /> <br />
The Supply Chain Management Program integrates topics from manufacturing operations, purchasing, transportation, and physical distribution into a unified program. Successful supply chain management, then, coordinates and integrates all of these activities into a seamless process. It embraces and links all of the partners in the chain. In addition to the departments within the organization, these partners include vendors, carriers, third party companies, and information systems providers.
<br /> <br />
Within the organisation, the supply chain refers to a wide range of functional areas. These include Supply Chain Management-related activities such as inbound and outbound transportation, warehousing, and inventory control. Sourcing, procurement, and supply management fall under the supply-chain umbrella, too. Forecasting, production planning and scheduling, order processing, and customer service all are part of the process as well. Importantly, it also embodies the information systems so necessary to monitor all of these activities.
<br /> <br />
Supply chain management must address the problems regarding distribution network configuration--number and location of suppliers, production facilities, distribution centers, warehouses and customers; distribution strategy--centralized versus decentralized, direct shipment, cross docking, pull or push strategies, third party logistics; information--integration of systems and processes through the supply chain to share valuable information, including demand signals, forecasts, inventory and transportation; and inventory management--quantity and location of inventory including raw materials, work-in-process and finished goods.
<br /> <br />
Supply chain management is a cross-functional approach to managing the movement of raw materials into an organization and the movement of finished goods out of the organization toward the end-consumer. Its success relies on the corporations' focus on core competencies and being flexible. In some circumstances, operations should be outsourced to other corporations that can perform the activities better or more cost effectively. We are providing safe and timely transportation service and also, trucking services.</p>
        </div>
        </div>
    </div>
  )
}

export default Transport;
