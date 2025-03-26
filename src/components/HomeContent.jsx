import React from 'react'
import cargo from '../assets/cargotruck.jpg'
function HomeContent() {
  return (
    <section className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'>
            <h2 className='text-blue-400 uppercase'>Quick Contact</h2>
            <div className='border-1 p-2 block h-[250px]'>
                <form action="">
                    <div className='flex justify-between'>
                        <label className='text-[14px]'>Your Name</label>
                        <input type="text" className='border-2 mb-4'/>
                    </div>
                    <div className='flex justify-between'>
                        <label className='text-[14px]'>Email</label>
                        <input type="email" className='border-2 mb-4'/>
                    </div>
                    <div className='flex justify-between'>
                        <label className='text-[14px]'>Phone/Cell</label>
                        <input type="number" className='border-2 mb-4'/>
                    </div>
                    <div className='flex justify-between'>
                        <label className='text-[14px]'>Message</label>
                        <textarea name="message" className='border-2 mb-4'></textarea>
                    </div>
                    <button className='bg-red-500 px-4 float-end'>Submit</button>
                </form>
            </div>

            <div className='block bg-blue-400 text-white mt-12'>
                <h2>Shipping Schedule</h2>
                <p>Nhava Sheva-Singapore <a href="#">click to open</a></p>
                <p>Chennai-Singapore <a href="#">click to open</a></p>
                <p>New Delhi-Singapore <a href="#">click to open</a></p>
            </div>

            <div className='border-1 bg-slate-400'>
                <h2 className='uppercase text-blue-400'>Contact Details</h2>
                <div>
                    <p>Delhi</p>
                    <p>Tel: +91-11-4665-6500</p>
                    <p>Pic: Mr. Pankaj Sharma</p>
                    <a href="mailto:pankaj.sharma@goklogistics.com">pankaj.sharma@goklogistics.com</a>
                </div>
                <div>
                    <p>Mumbai Branch</p>
                    <p>Tel: +91-22-4236-7203</p>
                    <p>Pic: Mr. Mohan Navale</p>
                    <a href="mailto:mohan.navale@goklogistics.com">mohan.navale@goklogistics.com</a>
                </div>
            </div>

            <div>
                <img src="plane.jpg" alt="plane" />
            </div>
        </div>

        <div className='lg:w-3/4 w-full'>
            <h2>Welcome to Gok Logistics</h2>
            <div className='float-left w-1/2 cover mx-2'>
                <img src={cargo} alt="truck" />
            </div>
            <h2>Gok Logistic Advantage</h2>
            <p className='text-justify'>As a part of the Naigai Trans Line Group (Japan), we have the unique advantage of having a close and vast network of offices and agents across the world and can serve our customers with a tailored solution at any location in the world..... know More
For business enterprises the most important service in today’s scenario is undoubtedly transportation service. The reason for this popularity is that the services we enjoy are not difficult to manufacture but difficult to deliver.
The issue that makes this service important is the fact that not everything is manufactured nearby. It therefore is a major challenge to transport the goods from one place to another.
Another fact is if the goods are very much in quantity and have to be transported from one city to another, then the most convenient and affordable means of transportation is by train. By this the good sent reach their destination safely on time.
This is because the train transportation services are very popular around the world. Its popularity is equally strong in India as plenty of transportation services are delivering into providing quality train transportation service in India.</p>

            <h3 className='text-orange-400 font-bold'>Our Services are:</h3>
            <p className='text-justify font-bold'>3PL Services, Supply Chain Management, International Courier Services, Air Freight Logistics, Sea Freight Forwarding Service, Domestic Distribution, Cargo Handling Services, Break Bulk Cargo, Transportation Services in India, Trucking Services in India</p>

            <div>
                
            </div>
        </div>
    </section>
  )
}

export default HomeContent
