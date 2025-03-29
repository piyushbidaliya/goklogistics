import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const data = [
    { location: "New York", name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { location: "Los Angeles", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { location: "Chicago", name: "Mike Johnson", email: "mike@example.com", phone: "555-555-5555" },
    { location: "New York", name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { location: "Los Angeles", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
]

function Domestic() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div className='lg:w-3/4 w-full'>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6'>Gok Logistics Domestic Network</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {data.map((item, index) => (
              <div key={index} className="bg-[#efefef] p-4 rounded-lg shadow-m w-full">
                <p className="font-semibold">{item.location}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Domestic
