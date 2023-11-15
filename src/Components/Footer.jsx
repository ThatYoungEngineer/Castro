import Logo from '../assets/images/logo.png' 
import LogoWhite from '../assets/images/logo-2.png' 
import Card1 from '../assets/images/card-1.png' 
import Card2 from '../assets/images/card-2.png' 
import Card3 from '../assets/images/card-3.png' 
import Card4 from '../assets/images/card-4.png' 
import backgroundImage from '../assets/images/image.webp'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

import ScrollToTop from '../Components/ScrollToTop'

import { Link, useLocation } from 'react-router-dom'


const Footer = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
        <>
            { isHomePage ? (
                <>
                    <div className='w-full overflow-x-hidden flex items-center flex-col justify-between gap-20'>
                        <div className='w-full pl-5 flex flex-col items-start justify-center gap-16 lg_tablet:pl-0 lg_tablet:flex-row lg_tablet:justify-between lg_tablet:w-[85%]
                        md_desktop:w-full md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
                            <div className=''>
                                <Link to='/'>
                                    <img
                                        className='cursor-pointer'
                                        src={Logo}
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-[#222222] font-semibold'>Category</h2>
                                <ul className='space-y-3'>
                                    <li> <a href="" className='footerLinks'>Men</a> </li>
                                    <li> <a href="" className='footerLinks'>Women</a> </li>
                                    <li> <a href="" className='footerLinks'>Kids</a> </li>
                                    <li> <a href="" className='footerLinks'>Accessories</a> </li>
                                    <li> <a href="" className='footerLinks'>Shoes</a> </li>
                                </ul>
                            </div>
                            <div className="flex flex-nowrap flex-col gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-[#222222] font-semibold'>Useful Link</h2>
                                <ul className='space-y-3'>
                                    <li> <a href="" className='footerLinks'>News & Tips</a> </li>
                                    <li> <a href="" className='footerLinks'>About Us</a> </li>
                                    <li> <a href="" className='footerLinks'>Terms & Conditions</a> </li>
                                    <li> <a href="" className='footerLinks'>Our Shop</a> </li>
                                    <li> <a href="" className='footerLinks'>Contact Us</a> </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-between flex-wrap gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-[#222222] font-semibold'>Contact</h2>
                                <ul className='space-y-3'>
                                    <li> <a href="" className='footerLinks'>4708 Ruecker Wall, <br /> Kassandratown, HI</a> </li>
                                    <li> <a href="" className='footerLinks'>+2(305) 587-3407</a> </li>
                                    <li> <a href="" className='footerLinks'>info@example.com</a> </li>
                                    <li>
                                        <div className="flex items-center justify-center gap-5" data-aos="fade-left" data-aos-duration="1000">
                                            <FacebookIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                                            <TwitterIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}}/>
                                            <GoogleIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                                            <YouTubeIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-[#222222] font-semibold'>Newsletter</h2>
                                <p className='font-poppins font-light text-[#848484]' >4708 Ruecker Wall, Kassandratown, <br /> HI 97729</p>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email'
                                    className='p-4 font-poppins font-light text-[#848484] border border-black'
                                />
                                <a
                                    href='#'
                                    className='inline-flex relative max-w-fit'
                                    data-aos="zoom-out"  data-aos-easing="linear" data-aos-duration="500" data-aos-delay="900"
                                > 
                                    <button className=" custom-button2"> Subscribe </button>
                                </a>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-center py-5 bg-[#EAECEB] px-8 lg_tablet:px-0 md_desktop:px-24  xm_desktop:px-44 lg_desktop:px-80'>
                            <div className='w-full flex flex-col items-center justify-between gap-3 md_tablet:flex-row lg_tablet:w-[80%] md_desktop:w-full'>
                                <div className='flex gap-3' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                                    <img className='cursor-pointer' src={Card1} alt="" />
                                    <img className='cursor-pointer' src={Card2} alt="" />
                                    <img className='cursor-pointer' src={Card3} alt="" />
                                    <img className='cursor-pointer' src={Card4} alt="" />
                                </div>
                                <p className='font-poppins text-[15px] text-[#848484]' data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" data-aos-delay="700">Castro © 2020 All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </>
            ) : (
                <>
                    <div
                        className='w-full h-[200px] bg-center bg-cover bg-no-repeat'
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    ></div>
                    <div className='pt-20 w-full overflow-x-hidden flex items-center flex-col justify-between gap-20 bg-[#141414]' >
                        <div className='w-full pl-5 flex flex-col items-start justify-center gap-16 lg_tablet:pl-0 lg_tablet:flex-row lg_tablet:justify-between lg_tablet:w-[90%] md_desktop:w-full md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
                            <div className=''>
                                <Link to='/'>
                                    <img
                                        className='cursor-pointer'
                                        src={LogoWhite}
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-white font-semibold'>Category</h2>
                                <ul className='space-y-3'>
                                    <li> <a href="" className='footerLinks'>Men</a> </li>
                                    <li> <a href="" className='footerLinks'>Women</a> </li>
                                    <li> <a href="" className='footerLinks'>Kids</a> </li>
                                    <li> <a href="" className='footerLinks'>Accessories</a> </li>
                                    <li> <a href="" className='footerLinks'>Shoes</a> </li>
                                </ul>
                            </div>
                            <div className="flex flex-nowrap flex-col gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-white font-semibold'>Useful Link</h2>
                                <ul className='space-y-3'>
                                    <li> <a href="" className='footerLinks'>News & Tips</a> </li>
                                    <li> <a href="" className='footerLinks'>About Us</a> </li>
                                    <li className='w-fit'> <a href="" className='footerLinks'>Terms & Conditions</a> </li>
                                    <li> <a href="" className='footerLinks'>Our Shop</a> </li>
                                    <li> <a href="" className='footerLinks'>Contact Us</a> </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-between flex-wrap gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-white font-semibold'>Contact</h2>
                                <ul className='space-y-3'>
                                    <li className='flex gap-3'> <LocationOnIcon style={{color: '#848484'}} />  <a href="" className='footerLinks'> 4708 Ruecker Wall, <br /> Kassandratown, HI</a> </li>
                                    <li className='flex gap-3'> <WifiCalling3Icon style={{color: '#848484'}} /> <a href="" className='footerLinks'>  +3(305) 587-3407</a> </li>
                                    <li className='flex gap-3'> <EmailOutlinedIcon style={{color: '#848484'}} /> <a href="" className='footerLinks'>  info@example.com</a> </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h2 className='font-josefin-sans text-[24px] text-white font-semibold'>Newsletter</h2>
                                <p className='font-poppins font-light text-[#a6a6a6]' >4708 Ruecker Wall, Kassandratown, <br /> HI 97729</p>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email'
                                    className='p-4 outline-none font-poppins font-light text-[#848484] border border-black'
                                />
                                <a
                                    href='#'
                                    className='inline-flex relative max-w-fit'
                                    data-aos="zoom-out"  data-aos-easing="linear" data-aos-duration="500" data-aos-delay="900"
                                > 
                                    <button className="darkFooterBtn"> Subscribe </button>
                                </a>
                            </div>
                        </div>
                        <section className='w-full'>
                            <hr className=' border-t border-[#848484]' />
                            <div className='w-full flex items-center justify-center py-5 bg-[#141414] px-8 lg_tablet:px-0'>
                                <div className='w-full flex flex-col items-center justify-between gap-5 md_tablet:flex-row lg_tablet:w-[80%] md_desktop:w-full md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
                                    <div className='flex gap-3' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                                        <img className='cursor-pointer' src={Card1} alt="" />
                                        <img className='cursor-pointer' src={Card2} alt="" />
                                        <img className='cursor-pointer' src={Card3} alt="" />
                                        <img className='cursor-pointer' src={Card4} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className="w-full flex items-center md_tablet:items-start justify-center gap-5" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" data-aos-delay="700">
                                            <FacebookIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                                            <TwitterIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}}/>
                                            <GoogleIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                                            <YouTubeIcon className='cursor-pointer text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                                        </div>
                                        <p className='font-poppins text-[15px] text-[#a6a6a6]' data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" data-aos-delay="300">Castro © 2020 All Right Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <ScrollToTop />
                </>
            )}
        </>
    )
}

export default Footer