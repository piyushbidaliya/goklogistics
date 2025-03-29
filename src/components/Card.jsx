import freight from '../assets/freight.jpg'
import warehouse from '../assets/warehouse.jpg'
import transport from '../assets/transport.jpg'

function Card() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/** Card 1 */}
        <div className="border-2 flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src={freight} alt="Freight Services" className="w-full h-[250px] object-cover rounded-md" />
          <h3 className="text-lg font-semibold text-center mt-4">
            Consolidation & <span className="text-blue-500">Deconsolidation</span>
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            Consolidation is a process of combining small shipments into one large shipment and deconsolidation is the breaking.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition">
            Read More
          </button>
        </div>

        {/** Card 2 */}
        <div className="border-2 flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src={warehouse} alt="Warehouse Services" className="w-full h-[250px] object-cover rounded-md" />
          <h3 className="text-lg font-semibold text-center mt-4">
            Warehousing & <span className="text-blue-500">Storage</span>
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            We offer secure warehousing solutions with real-time inventory tracking and efficient storage options.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition">
            Read More
          </button>
        </div>

        {/** Card 3 */}
        <div className="border-2 flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src={transport} alt="Transport Services" className="w-full h-[250px] object-cover rounded-md" />
          <h3 className="text-lg font-semibold text-center mt-4">
            Transportation & <span className="text-blue-500">Logistics</span>
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            Our reliable transportation network ensures timely and safe delivery of your goods.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
