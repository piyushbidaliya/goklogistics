import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'



function Express() {
  return (
    <div>
      <div>
        <img src="image.jpg" alt="hero" />
      </div>

      <div className='w-full flex gap-2 lg:flex-row flex-col max-w-[1170px] mx-auto px-8 py-4'>
        <div className='lg:w-1/4 w-full'><Sidebar/></div>

        <div className='lg:w-3/4 w-full'>
            <h2 className='text-xl text-[#FF6600] lg:mt-0 my-6'>Express Services</h2>
            <p>In conjunction with a global leader in the Express Services segment, we are also in a position to offer international door-to-door parcel service at highly competitive rates. We provide services that include air freight logistics, international couriers and international logistics etc. NTL is very efficient in express services when it comes to international logistics. It has air partners, who provide quality service in terms of international couriers. All your global shipping requirements up to 1000 kg (by Express Service) are easily taken care of with just a call to us.
<br /><br />
We provide sure and swift express services, which make us a world class service provider. For express services, we select air partners very carefully and effectively, so it can be strategically beneficial. By doing this, we are always able to meet the deadlines given to us by our clients. We make sure that through our express services, our clients get the shipments at the place they require it and the time they want it. We have our logistic assets in the key geographical areas, so our clients can get our services wherever they require it. Whatever place it is for sending an international courier or anything related to the Air freight logistics, we provide quality services and the courier reaches the desired place within the time limit.
<br /><br />
 We have staff which is highly trained and skilled in meeting the demands made from our clients. Along with the highly qualified staff, we are equipped with all the latest technology which is required in giving quality service. We manage our systems effectively to keep a check on the international couriers. Till the time it does not reach its destination, we keep a track of it to provide best results in international logistic services. Due to the services provided by us, our clients can get the entire supply chain management under one roof. This results in cost effectiveness as well.</p>
        </div>
        </div>
    </div>
  )
}

export default Express;
