import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import ProductCard from '../productCard/productCard';
import ProductNewReleaseCard from '../productCard/productNewReleaseCard';
import ProductOfferBox from '../productOfferBox/productOfferBox';
import demoImage1 from './demoImage1.jpg';
import demoImage2 from './demoImage2.jpg';
import demoImage3 from './demoImage2.jpg';



function Home() {
  return (
    <div className="home">

        {/* slider crousal */}
      <div id="default-carousel" className="relative" data-carousel="slide" data-ride="carousel" >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-xs md:h-96">
          {/* Item 1 */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
            data-carousel-item
          >
            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <img
              src={demoImage1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
            data-carousel-item
          >
            <img
              src={demoImage2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
            data-carousel-item
          >
            <img
              src={demoImage3}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      


 <div className='grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2    bg-black '>
 <ProductOfferBox/>
      <ProductOfferBox/>
      <ProductOfferBox/>
      <ProductOfferBox/>
    
     

      </div>
      <div className="grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2    bg-black ">
       
       <Link to={`/Product/123`}>
         <ProductNewReleaseCard/>
       </Link>
       <Link to={`/Product/123`}>
         <ProductCard />
       </Link>
       <Link to={`/Product/123`}>
         <ProductCard/>
       </Link>
       <Link  to={`/Product/123`}>
         <ProductNewReleaseCard/>
       </Link>
      
      
      
   </div> 
   <div>
   <Carousel/>
   </div>
<div className='flex justify-center mt-2 mb-1' >
  <Link to={`/Products/All`}>
  <button type="button" class=" border-gray-700 text-gray-700 border-2 p-1 text-xl">Explore More</button>
  </Link>

</div>
     
    </div>
  );
}

export default Home;
