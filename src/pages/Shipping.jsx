import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'



function Shipping() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div className='lg:w-3/4 w-full'>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6'>Shipping Schedule</h2>
            <p>Export LCL: <br /> <br /> <span>As the market leader in LCL consolidation in Japan, the Indian entity of Naigai Trans Lines, NTL India also pursues the same Vision & Mission. To achieve this, we ensure the weekly sailings from Nhava Sheva, Delhi & Chennai to Singapore.
                <br /> <br />
We offer competitive pricing, put ourselves in the customer’s shoes and listen attentively to what they have to say. This helps us to understand their Time Commitments and we are able to come out with optimum solutions. Our ground operations teams are well trained, guided and equipped to handle the challenges in LCL consolidation and our Customer Service people know the pulse of our customers. All this puts us ahead of the competition.</span>
            </p>
            <p className='mt-4'>From Singapore, our fellow subsidiary “NTL NAIGAI TRANS LINE (S) PTE” arrange transshipment to all over the world.</p>
            <ul className='list-disc'>
                <li className='ml-5'>Nhava Sheva-Singapore. <span>Click to open</span></li>
                <li className='ml-5'>Chennai-Singapore. <span>Click to open</span></li>
                <li className='ml-5'>New Delhi-Singapore. <span>Click to open</span></li>
                <li className='ml-5'>Singapore-Various Destination. <span>Click to open</span></li>
            </ul>
            <p className='mt-8'>Import LCL:</p>
            <ul className='list-disc'>
                <li className='ml-5'>Japan-India. <span>Click to open</span></li>
                <li className='ml-5'>Singapore-India. <span>Click to open</span></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Shipping;
