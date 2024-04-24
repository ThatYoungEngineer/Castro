import Preloader from '../Components/Preloader'
import HeroContent from '../Components/HeroContent'
import CategoryCard from '../Components/CategoryCard'
import CollectionCard from '../Components/CollectionCard'
import NewsCard from '../Components/NewsCard'
import Carousal from "../Components/Carousal"

import categoriesData from './Categories/categoriesData'
import productsData from './Products/productsData'

import Sales from '../assets/images/sale-banner.jpg'
import Shape2 from '../assets/images/shape-2.png'
import Shape3 from '../assets/images/shape-3.png'
import truck from '../assets/images/truck.png' 
import undo from '../assets/images/return.png'
import avail from '../assets/images/avail.png' 
import card from '../assets/images/card.png' 
import Shape from '../assets/images/shape-1.png'
import Person1 from '../assets/images/hero-person1.png'
import Person2 from '../assets/images/hero-person2.png'
import Person3 from '../assets/images/hero-person3.png'
import Separator from '../assets/images/separator-1.png'
import News1 from '../assets/images/news-1.jpg'
import News2 from '../assets/images/news-2.jpg'
import News3 from '../assets/images/news-3.jpg'

import NorthEastIcon from '@mui/icons-material/NorthEast'

import { Link } from 'react-router-dom'

const Home = () => {

  const products = productsData

  const persons = [Person1, Person2, Person3]

  return (
    <>
      <Preloader />
      <div className='relative bg-[#EDF0F5] flex justify-between px-52 sm_mobile:px-0 sm_mobile:py-20 md_tablet:py-44' >
        <img
          src={Shape}
          className=' absolute bottom-0 right-56 -z-0 '
          alt=""
        />
        <HeroContent
          persons={persons}
        />
      </div>
      <div 
        className="max-w-screen overflow-hidden h-[80vh] flex flex-col items-center justify-center gap-3 my-20
        sm_mobile:h-fit sm_mobile:px-5 lg_tablet:px-10 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80"
      >
        <h2 className="font-josefin-sans font-semibold text-[#222222] text-[40px]">Top Category</h2>
        <p className="font-poppins text-[15px] text-center text-[#222222] px-4 leading-7">Follow the most popular trends and get exclusive items from castro shop</p>
        <a href="" className='pointer-events-none mt-2  mb-12'>
          <img
            src= {Separator}
            alt=""
          />
        </a>
        <div className='w-[100%] flex flex-wrap justify-center items-center gap-8 xm_desktop:gap-16'>
          {categoriesData.slice(0,4).map((category) => (
            <div key={category.id}>
              <CategoryCard
                image={category.img}
                headline={category.headline}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-3 mt-14'>
        <h2 id='collections' className="font-josefin-sans font-semibold text-[#222222] text-[40px] text-center">Our Top Collection</h2>
        <p className="font-poppins text-[1rem] text-[#222222] text-center leading-7">There are some product that we featured for choose your best</p>
        <a href="" className='pointer-events-none mt-2  mb-12'>
          <img
            src= {Separator}
            alt=""
          />
        </a>
        <h2 className='font-poppins font-semibold border-b border-black text-[20px] pb-0 text-[#222222] cursor-pointer mb-10'>Best Seller</h2>
        <section className='w-[100%] flex items-center justify-center flex-wrap gap-7 xm_desktop:justify-between lg_tablet:gap-10 lg_tablet:px-10 sm_desktop:px-10 sm_desktop:gap-5 md_desktop:gap-7 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
          {products.slice(0, 8).map((product) => (
            <div key={product.id}>
              <CollectionCard
                productId={product.id}
                image={product.img}
                desc={product.name}
                price={product.price}
                product={true && product}
              />
            </div>
          ))}
        </section>
        <Link to='/products'>
          <span href='#'
            className='inline-flex relative z-10 max-w-fit mt-10 hover:text-white'
          > 
            <button className=" custom-button">
              View All Products <NorthEastIcon className='rotate-12 ml-2' />
            </button>
          </span>
        </Link> 
      </div>
      <div className='relative max-w-screen h-[110vh] lg_mobile:h-[80vh] md_tablet:h-[70vh] xm_desktop:h-[60vh] mt-32'>           { /* //absolute section// */ }
        <img
          src={Sales}
          className=' h-full w-full overflow-hidden object-cover md_desktop:h-full'
          alt=""
        />
        <div
          className='absolute-center shadow-lg w-[95vw] sm_desktop:w-[90vw] md_desktop:w-[80vw] xm_desktop:w-[1200px] bg-white'
        >
            <div className='relative'>
              <img className='sm_mobile:hidden md_tablet:block absolute top-0 left-0' src={Shape2} alt="" />
              <img className='sm_mobile:hidden md_tablet:block absolute top-0 right-0' src={Shape3} alt="" />
              <div
                className='flex items-center justify-center flex-col flex-wrap gap-5 relative z-10 px-4 py-16 font-medium
                lg_mobile:px-10 sm_tablet:px-10
                md_tablet:px-[65px] sm_desktop:px-48 md_desktop:px-40
                lg_tablet:px-20 lg_desktop:px-48'
              >
                  <h2
                    className='font-josefin-sans font-semibold md_tablet:font-semibold md_tablet:text-[45px] lg_tablet:text-[50px] text-[#222222] text-center
                    sm_mobile:text-[36px] sm_tablet:leading-[60px]'>End of Season Clearance Sale upto 50%</h2>
                  <h4
                    className='md_tablet:px-10 font-poppins font-medium md_tablet:font-semibold text-[18px] text-[#222222] text-center'>Welcome to the new range of shaving products from master barber. We have over three decades of experience in the male grooming industry.</h4>
                  <a
                    href='#'
                    className='mt-5 inline-flex relative z-10 max-w-fit hover:text-white'> 
                    <button className="inline-flex custom-button">
                        <p className='font-poppins text-[20px]'>Shop Now</p> <NorthEastIcon className='rotate-12 ml-2' />
                    </button>
                  </a>
              </div>
            </div>
          </div>
        </div>
      <div
        id='blog'
        className='flex flex-col items-center justify-center gap-5 my-32
        sm_mobile:mt-96 lg_mobile:mt-80 sm_tablet:mt-52 md_tablet:mt-48 lg_tablet:mt-64
        sm_desktop:mt-52 md_desktop:mt-60 xm_desktop:mt-48 lg_desktop:mt-60'
      >
        <h2 className="font-josefin-sans text-[#222222] text-[40px] text-center md_tablet:font-semibold">Castro News</h2>
        <p className="font-poppins text-[1rem] text-[#222222] text-center px-4  ">Excepteur sint occaecat cupidatat non proident sunt</p>
        <a href="" className='pointer-events-none mt-2 mb-12'>
          <img
            src= {Separator}
            alt=""
          />
        </a>
        <section
          className='w-full flex flex-wrap items-center justify-center gap-7 sm_desktop:justify-between sm_desktop:gap-0 px-4
          md_tablet:px-5 sm_desktop:px-10 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'
        >
          <NewsCard 
            image={News1}
            date="May 05, 2020"
            headline="Why is a ticket to lagos so expensive?"
            admin={true}
            comments="03 Comments"
            desc="Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris."
          />
          <NewsCard 
            image={News2}
            date="May 04, 2020"
            headline="But i must explain to you how all this mistaken idea."
            admin={true}
            comments="07 Comments"
            desc="Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris."
          />
          <NewsCard 
            image={News3}
            date="May 03, 2020"
            headline="The Biebers Just Switched Up Their Couple Style"
            admin={false}
            comments="05 Comments"
            desc="Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris."
          />
        </section>
      </div>
      <section className='w-full flex flex-wrap items-center justify-center mt-32 mb-10 px-10 md_tablet:px-20 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
  <div className="font-poppins border-y py-10 flex flex-col items-start justify-center gap-10 md_tablet:flex-row md_tablet:justify-between sm_desktop:gap-7 xm_desktop:gap-10 lg_desktop:gap-16 flex-wrap">
    
    {/* Div 1: Free Shipping */}
    <div className="flex sec-banner sm_desktop:flex-1">
      <img src={truck} className="w-14 h-14" alt="Free Shipping" />
      <div>
        <h2 className="font-josefin-sans font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
          Free Shipping
        </h2>
        <p className="text-sm text-gray-700">Free shipping on orders over $100</p>
      </div>
    </div>

    {/* Div 2: Secure Payment */}
    <div className="flex sec-banner sm_desktop:flex-1" >
      <img src={card} className="w-14 h-14" alt="Secure Payment" />
      <div>
        <h2 className="font-josefin-sans font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
          Secure Payment
        </h2>
        <p className="text-sm text-gray-700">We ensure secure pay with PEV</p>
      </div>
    </div>

    {/* Div 3: Support 24/7 */}
    <div className="flex sec-banner sm_desktop:flex-1" >
      <img src={avail} className="w-14 h-14" alt="Support 24/7" />
      <div>
        <h2 className="font-josefin-sans font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
          Support 24/7
        </h2>
        <p className="text-sm text-gray-700">Contact us 24 hours, and 7 days a week</p>
      </div>
    </div>

    {/* Div 4: 30 Days Return */}
    <div className="flex sec-banner sm_desktop:flex-1" >
      <img src={undo} className="w-14 h-14" alt="30 Days Return" />
      <div>
        <h2 className="font-josefin-sans font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
          30 Days Return
        </h2>
        <p className="text-sm text-gray-700">Simply return it within 30 days for an exchange.</p>
      </div>
    </div>
  </div>
</section>

    <Carousal />
    </>
  )
}

export default Home