import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Career() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6'>Career</h2>
            <div className='bg-[#e5e5e5]'>
                <p className='text-[#FF6600] p-5 text-lg '>Current Opening</p>
            </div>
            <p className='font-bold pt-5'>Currently we are hiring for:</p>
            <p className='font-bold py-5'>Assistant Manager(Sales)/BDM at our Delhi, Mumbai & Chennai branches:</p>
            <div>
              <p className='font-bold'>Resource will be responsible for following mention duties-</p>
              <ul className='list-disc '>
                <li className='ml-5'>Sales promotion and business development activities.</li>
                <li className='ml-5'>Must be well conversant with freight Forwarding business development.</li>
                <li className='ml-5'>Addition competence of Surface transport business development.</li>
                <li className='ml-5'>Should have very good communication skills.</li>
                <li className='ml-5'>Having an experience of 4 – 5 years in same field.</li>
              </ul>
            </div>
            <p>Interested candidates can post their updated CV to us at <Link to="mailto:careersindia@goklogistics.com"><span className='text-[#FF6600]'>careersindia@goklogistics.com</span></Link></p>
        </div>
      </div>

    </div>
  )
}

export default Career
