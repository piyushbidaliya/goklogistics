import { useState } from 'react';
import { Link } from 'react-router-dom';
import cargo from '../assets/cargotruck.jpg';
import plane from '../assets/logistic.png';
import indiaMap from '../assets/indiamap.jpg';
import worldMap from '../assets/worldmap.jpg';

function HomeContent() {
    const [map, setMap] = useState('india');

    return (
        <section className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
            <div className='lg:w-1/4 w-full'>
                <h2 className='text-blue-400 uppercase'>Quick Contact</h2>
                <div className='border-1 p-2 block'>
                    <form action=''>
                        <div className='flex flex-col mb-4'>
                            <label className='text-[14px]'>Your Name</label>
                            <input type='text' className='border-2 p-1'/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-[14px]'>Email</label>
                            <input type='email' className='border-2 p-1'/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-[14px]'>Phone/Cell</label>
                            <input type='number' className='border-2 p-1'/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-[14px]'>Message</label>
                            <textarea name='message' className='border-2 p-1'></textarea>
                        </div>
                        <button className='bg-red-500 px-4 py-1 text-white float-end'>Submit</button>
                    </form>
                </div>

                <div className='w-full mt-12'>
                    <img src={plane} alt='plane' className='w-full'/>
                </div>
            </div>

            <div className='lg:w-3/4 w-full'>
                <h2 className='px-2 text-xl py-8'>Welcome to Gok Logistics</h2>
                <div className='float-left w-1/2 cover mx-2'>
                    <img src={cargo} alt='truck' className='border-1 border-[#ccc] p-2'/>
                </div>
                <h2 className='text-blue-600'>Gok Logistic Advantage</h2>
                <p className='text-justify text-[12px] text-[#555555] pb-8 mx-2'>
                    As a part of the Naigai Trans Line Group (Japan), we have the unique advantage of having a close and vast network of offices and agents across the world...
                    <Link to='/about'><span className='text-blue-500 font-semibold'> Know More</span></Link>
                    <br /> <br />
                    For business enterprises the most important service in today’s scenario is undoubtedly transportation service. The reason for this popularity is that the services we enjoy are not difficult to manufacture but difficult to deliver.
<br /> <br />
The issue that makes this service important is the fact that not everything is manufactured nearby. It therefore is a major challenge to transport the goods from one place to another.
<br /> <br />
Another fact is if the goods are very much in quantity and have to be transported from one city to another, then the most convenient and affordable means of transportation is by train. By this the good sent reach their destination safely on time.
<br /> <br />
This is because the train transportation services are very popular around the world. Its popularity is equally strong in India as plenty of transportation services are delivering into providing quality train transportation service in India.
                </p>

                <h3 className='text-orange-400 font-bold'>Our Services:</h3>
                <p className='text-justify font-semibold text-[14px] pb-8'>
                    3PL Services, Supply Chain Management, International Courier Services, Air Freight Logistics, Sea Freight Forwarding Service, Domestic Distribution, Cargo Handling Services, etc.
                </p>

                <div>
                    <div className='border-1 border-dashed border-[#E7E7E7]'></div>
                    <button 
                        onClick={() => setMap('india')} 
                        className={`ml-4 mr-1 mt-2 px-4 py-2 font-semibold cursor-pointer text-[14px] ${map === 'india' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-red-500'}`}>
                        Domestic Network
                    </button>
                    <button 
                        onClick={() => setMap('world')} 
                        className={`px-4 py-2 font-semibold cursor-pointer text-[14px] ${map === 'world' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-red-500'}`}>
                        International Network
                    </button>

                    <div className='border-1 border-[#E7E7E7]'>
                        <img src={map === 'india' ? indiaMap : worldMap} alt='map' className={`${map==='world'?'w-full': 'w-1/2 mx-auto'}`}/>
                    </div>
                </div>

                <div>
                    <h2>Our Association</h2>
                </div>
            </div>
        </section>
    );
}

export default HomeContent;
