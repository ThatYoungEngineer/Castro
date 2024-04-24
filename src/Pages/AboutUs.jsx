import backgroundBanner from '../assets/images/product-bg-cover.jpg'
import about1 from '../assets/images/about-1.jpg'
import separator from '../assets/images/separator-3.png'
import separator1 from '../assets/images/separator-1.png'
import truck from '../assets/images/truck.png' 
import undo from '../assets/images/return.png'
import avail from '../assets/images/avail.png' 
import card from '../assets/images/card.png' 
import hanged from '../assets/images/chooseus-bg-1.jpg'
import team1 from '../assets/images/team-1.jpg'
import team2 from '../assets/images/team-2.jpg'
import team3 from '../assets/images/team-3.jpg'


import Preloader from '../Components/Preloader'
import CollectionCard from '../Components/CollectionCard'
import Carousal from '../Components/Carousal'

import { useLocation } from 'react-router-dom'

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import NorthEastIcon from '@mui/icons-material/NorthEast'


function AboutUs() {
    const location = useLocation();

  return (
    <>  
        {/* <Preloader /> */}
        <div
            id='bg_banner'
            className="flex flex-col items-center justify-center py-20 px-0 "
            style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
            <h2 className='font-josefin-sans font-semibold text-[46px] text-[#222]'>About Us</h2>
            <div className='flex gap-2'>
                <p className='font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear'>
                    Home
                </p>
                <span className='flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]'><ArrowForwardIosOutlinedIcon style={{fontSize: '10px', fontWeight: 'bold'}}/>About Us</span>
            </div>
        </div>
        <section className='flex items-center justify-center lg_tablet:my-32 my-16'>
            <section className='lg_tablet:w-[70%] flex flex-col gap-10 lg_tablet:flex-row sm_mobile:w-[90%] lg_desktop:w-full lg_desktop:px-80'>
                <div className='flex flex-1 flex-col gap-10'>
                    <div className='flex flex-col flex-wrap'>
                        <h2 className='font-josefin-sans font-semibold text-[50px] text-[#222]'>Simple <span className='text-[#ff4135]'>&</span> Minimalistic</h2>
                        <h2 className='font-semibold text-[26px] text-[#848484]'>Secure Checkout</h2>
                    </div>
                    <div>
                        <p className='font-poppins font-normal text-[15px] text-[#848484]' >Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit anim est laborum.</p>
                    </div>
                    <div>
                        <p className='font-poppins font-normal text-[15px] text-[#848484]'>accusan enim ipsam voluptam quia voluptas sit aspern odit aut.</p>
                    </div>
                    <div>
                        <a
                            href='#'
                            className='inline-flex relative z-10 max-w-fit hover:text-white'> 
                            <button className=" custom-button">
                                Contact Us <NorthEastIcon className='rotate-12 ml-2' />
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <img
                        src={about1}
                        alt=""
                    />
                </div>
                <div className='flex flex-col flex-1 gap-10' >
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-josefin-sans font-semibold text-[24px] text-[#222]'>Castro Overview</h2>
                        <p className='font-poppins font-normal text-[15px] text-[#848484]'>Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit anim est laborum.accusan enim ipsam voluptam quia voluptas sit aspern odit aut.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-josefin-sans font-semibold text-[24px] text-[#222]'>Our Mission</h2>
                        <p className='font-poppins font-normal text-[15px] text-[#848484]'>Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit anim est laborum.accusan enim ipsam voluptam quia voluptas sit aspern odit aut.</p>
                    </div>
                    <div>
                        <p className='font-poppins font-normal text-[15px] text-[#848484]'>Sed quia consequunturmagni dolores eos qui ratione voluptatem.</p>
                    </div>
                </div>
            </section>
        </section>
        <section className='flex justify-between my-32'>
            <div className='w-full lg_tablet:w-1/2 flex flex-col gap-5 bg-[#EDF0F5] px-5 py-20 lg_tablet:px-10'>
                <h2 className='font-josefin-sans font-semibold text-[40px] text-[#222]'>Top Category</h2>
                <p className='font-poppins text-[15px] text-[#222]'>There are some product that we featured for choose your best</p>
                <img
                    className='w-[100px]'
                    src={separator}
                    alt=""
                />
                <div className="flex items-start justify-center gap-0 flex-col mt-32 mb-10
                md_tablet:flex-row md_tablet:justify-between md_tablet:flex-wrap md_tablet:gap-10 md_tablet:mt-10 md_tablet:mb-0">
                    {/* Div 1: Free Shipping */}
                    <div className="flex items-start gap-5" style={{ flex: '0 0 45%' }}>
                        <img src={truck} className="w-10 h-10" alt="Free Shipping" />
                        <div>
                        <h2 className="font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
                            Free Shipping
                        </h2>
                        <p className="text-sm text-gray-700">Free shipping on orders over $100</p>
                        </div>
                    </div>

                    {/* Div 2: Secure Payment */}
                    <div className="flex items-start gap-5" style={{ flex: '0 0 45%' }}>
                        <img src={card} className="w-10 h-10" alt="Secure Payment" />
                        <div>
                        <h2 className="font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
                            Secure Payment
                        </h2>
                        <p className="text-sm text-gray-700">We ensure secure payment with PEV</p>
                        </div>
                    </div>

                    {/* Div 3: Support 24/7 */}
                    <div className="flex items-start gap-5" style={{ flex: '0 0 45%' }}>
                        <img src={avail} className="w-10 h-10" alt="Support 24/7" />
                        <div>
                        <h2 className="font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
                            Support 24/7
                        </h2>
                        <p className="text-sm text-gray-700">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>

                    {/* Div 4: 30 Days Return */}
                    <div className="flex items-start gap-5" style={{ flex: '0 0 45%' }}>
                        <img src={undo} className="w-10 h-10" alt="30 Days Return" />
                        <div>
                        <h2 className="font-semibold text-2xl cursor-pointer hover:text-red-500 transition ease-out duration-300">
                            30 Days Return
                        </h2>
                        <p className="text-sm text-gray-700">Simply return it within 30 days for an exchange.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg_tablet:block min-w-1/2 overflow-hidden">
                <div className='w-full bg-cover hover:scale-[1.05] transition ease-in duration-200'>
                    <img src={hanged} alt="" />
                </div>
            </div>
        </section>
        <section className='flex flex-col gap-5 items-center justify-center my-20 sm_mobile:px-5 lg_tablet:px-10 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80'>
            <h2 className="font-josefin-sans text-[#222222] text-[34px] text-center lg_tablet:text-[40px]">Our Expert Team</h2>
            <h3 className="font-poppins text-[1rem] text-[#222222] text-center px-4"> There are some product that we featured for choose your best</h3>
            <img
                src={separator1}
                alt=""
            />
            <div className='mt-10 w-full flex-wrap md_tablet:flex-nowrap px-1 flex items-center justify-between sm_desktop:justify-center sm_desktop:gap-10 gap-5'>
                <CollectionCard
                    team = {true}
                    image={team1}
                    name= "Leanne Simpson"
                    niche= "Photographer"
                />
                <CollectionCard
                    team = {true}
                    image={team2}
                    name= "Ray Cooper"
                    niche= "Manager"
                />
                <CollectionCard
                    team = {true}
                    image={team3}
                    name= "Caroline Johnson"
                    niche= "Artist"
                />
            </div>
        </section>
        <Carousal />
    </>
  )
}

export default AboutUs
