import React from 'react'

function Card() {
  return (
    <div className='flex-col lg:flex-row flex max-w-[1170px] mx-auto px-8 py-4'>
        <div className='border-2 flex flex-col items-center p-2 m-2'>
            <img src="image.jpg" alt="consolidation & deconsolidation" />
            <h3>Consolidation & <span>Deconsolidation</span></h3>
            <p>Consolidation is a process of combining small shipments into one large shipment and deconsolidation is the breaking.</p>
            <button className='hover:bg-orange-400 py-2 px-4 bg-blue-400'>Read More</button>
        </div>
        <div className='border-2 flex flex-col items-center p-2 m-2'>
            <img src="image.jpg" alt="consolidation & deconsolidation" />
            <h3>Consolidation & <span>Deconsolidation</span></h3>
            <p>Consolidation is a process of combining small shipments into one large shipment and deconsolidation is the breaking.</p>
            <button className='hover:bg-orange-400 py-2 px-4 bg-blue-400'>Read More</button>
        </div>
        <div className='border-2 flex flex-col items-center p-2 m-2'>
            <img src="image.jpg" alt="consolidation & deconsolidation" />
            <h3>Consolidation & <span>Deconsolidation</span></h3>
            <p>Consolidation is a process of combining small shipments into one large shipment and deconsolidation is the breaking.</p>
            <button className='hover:bg-orange-400 py-2 px-4 bg-blue-400'>Read More</button>
        </div>
    </div>
  )
}

export default Card