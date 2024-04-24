import Logo from '../assets/images/logo.png' 
import Logo2 from '../assets/images/logo-2.png' 
import UK from '../assets/images/united-kingdom.png' 

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LanguageIcon from '@mui/icons-material/Language'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'
import PinterestIcon from '@mui/icons-material/Pinterest'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Navbar = () => {

    const [Menu, setMenu] = useState(false)
    const [StickyNav, setStickyNav] = useState(false)

    const cartItems = useSelector((state) => state.cart.cartItems)

    useEffect(() => {
        if (Menu) {
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'scroll'
        }    
        return () => {
          document.body.style.overflowY = 'scroll'
        };
    }, [Menu])
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) {
                setStickyNav(true);
            } else {
                setStickyNav(false);
          }
        }
            window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
      }, [])
    
    function ToggleMenu() {
        setMenu(prevMenu => !prevMenu)
    }

    const NavItem = ({ to, children }) => {
        const { pathname } = useLocation();
        const isActive = pathname === to;
      
        return (
            <li className={`py-3 px-0 border-b border-[#F0F0F0] ${isActive ? 'text-[#ff4135]' : 'hover:text-[#ff4135]'} transition ease-in duration-300`}>
                <Link to={to}>
                    {children}
                </Link>
            </li>
        )
    }

    const { pathname } = useLocation();
    const isAnyActive = ['/services', '/team', '/404'].some(path => path === pathname);


    return (
        <>
            <header   //sticky nav
                className={`hidden sticky z-50 top-0 ${StickyNav ? 'lg_tablet:flex ' : ''}  bg-white items-center justify-between 
                px-10 sm_desktop:px-20 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80 sticky-header-shadow`} 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
            >  
                <div className='w-full flex items-center justify-center md_tablet:w-fit'>
                    <Link to="/">
                        <img
                            src={Logo}
                            className='cursor-pointer'
                            alt="castro."
                        />
                    </Link>
                </div> 
                    <ul className='flex gap-1 list-none font-poppins font-medium text-[15px] text-black py-[24px] '>
                        <li className=''>
                            <NavLink to="/" className={ ({ isActive }) => (isActive ? 'text-white bg-[#ff4135] px-[2vw] py-[24px]' : 'bg-transparent px-[2vw] py-[24px] hover:text-white hover:bg-[#ff4135] transition ease-out duration-300')}> 
                                Home 
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to='/services' className={isAnyActive ? 'text-white bg-[#ff4135] px-[2vw] py-[24px]' : 'bg-transparent  px-[2vw] py-[24px] hover:text-white hover:bg-[#ff4135] transition ease-out duration-300'}>
                                Pages
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to="/categories" className={({ isActive }) => (isActive ? 'text-white bg-[#ff4135] px-[2vw] py-[24px]' : 'bg-transparent  px-[2vw] py-[24px] hover:text-white hover:bg-[#ff4135] transition ease-out duration-300')}>
                                Categories
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink to="/products" className={ ({ isActive }) => (isActive ? 'text-white bg-[#ff4135] px-[2vw] py-[24px]' : 'bg-transparent  px-[2vw] py-[24px] hover:text-white hover:bg-[#ff4135] transition ease-out duration-300')}>
                                Products
                            </NavLink>
                        </li>                        
                        <li className=''>
                            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'text-white bg-[#ff4135] px-[2vw] py-[24px]' : 'bg-transparent  px-[2vw] py-[24px] hover:text-white hover:bg-[#ff4135] transition ease-out duration-300')}>
                                About
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'text-white bg-[#ff4135] px-[2vw] py-[24px]' : 'bg-transparent  px-[2vw] py-[24px] hover:text-white hover:bg-[#ff4135] transition ease-out duration-300')}>
                                <ShoppingCartIcon />
                                {cartItems.length >= 1 && (
                                    <div
                                        className='absolute right-[2px] top-[-20px] sm_desktop:right-0 sm_desktop:top-[-15px] md_desktop:right-[2px] md_desktop:top-[-10px] lg_desktop:right-3 lg_desktop:top-[-15px]
                                        z-10 flex items-center justify-center
                                        cart-item-shadow-sticky animate__animated animate__flash animate__slow animate__infinite'
                                    >
                                        <p className='text-center'>{cartItems.length}</p>                                        
                                    </div>
                                )}
                            </NavLink>
                        </li>
                    </ul>
            </header>
            <div className='flex
                sm_mobile:items-center sm_mobile:justify-center sm_mobile:flex-col
                lg_tablet:px-5 lg_tablet:w-full lg_tablet:justify-between lg_tablet:gap-0 lg_tablet:flex-row
                sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80'
            >
                <div 
                    className="flex gap-5 py-3
                    sm_mobile:flex-col sm_mobile:items-center sm_mobile:justify-center sm_mobile:gap-2
                    md_tablet:flex-row md_tablet:w-[80%] md_tablet:justify-between
                    lg_tablet:justify-center lg_tablet:w-fit lg_tablet:gap-5" 
                    data-aos="fade-up" data-aos-duration="1200" data-aos-delay="2600"
                >
                    <p className='font-poppins text-[14px]'>
                        <MailOutlineIcon className='text-[#d0d0d0] mr-2 md_tablet:mr-1' style={{fontSize: '16px'}}/> 
                        Support@example.com
                    </p> 
                    <p className='font-poppins text-[14px]'>
                        <LanguageIcon className='text-[#d0d0d0] mr-2 md_tablet:mr-1' style={{fontSize: '16px'}}/>
                        Kleine Pierbard 8-6 2249 KV Vries
                    </p>
                </div>
                <div className="flex gap-10
                    sm_mobile:w-screen sm_mobile:flex-col sm_mobile:gap-5
                    md_tablet:flex-row md_tablet:justify-between md_tablet:items-center md_tablet:w-[60%]
                    lg_tablet:w-fit lg_tablet:justify-center lg_tablet:gap-5"
                >
                    <div className="flex items-center justify-center gap-5 sm_mobile:gap-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2900">
                        <FacebookIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                        <TwitterIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}}/>
                        <PinterestIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}}/>
                        <GoogleIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                        <YouTubeIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                    </div>
                    <span className='sm_mobile:hidden md_tablet:block'> <HorizontalRuleIcon className='font-light text-[#d3d3d3] rotate-90' style={{fontSize: '30px'}} />   </span>
                    <div className="flex gap-5 sm_mobile:w-full sm_mobile:justify-between sm_mobile:px-8 md_tablet:px-0 md_tablet:w-fit md_tablet:justify-between">
                        <span className='relative py-3  text-[#222222] text-[14px] flex items-center justify-center font-poppins cursor-pointer group/lang'>
                            <img
                                src={UK}
                                className='w-5 h-5 mr-3'
                                alt="UK"
                            />
                            <p className=''>English</p> 
                            <KeyboardArrowDownSharpIcon />
                            <div
                                className='lg_tablet:w-40 h-fit absolute z-20 top-[100%] left-5 bg-[#F8F8F8] hidden group-hover/lang:block sm_mobile:w-fit
                                animate__animated animate__fadeInUp animate__fast'
                            >
                                <ul className='font-poppins bg-[#ffff]  text-[14px] border-x border-[#F0F0F0] space-y-3'>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>German</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>Italian</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>Chinese</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>Russian</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>English</li>
                                </ul>                    
                            </div>
                        </span>
                        <span className='relative py-3 text-[#222222] text-[14px] flex items-center justify-center font-poppins cursor-pointer group/lang'>
                            <p>USD</p> 
                            <KeyboardArrowDownSharpIcon />
                            <div
                                className='lg_tablet:w-40 absolute z-20 top-[100%] right-0 lg_tablet:left-5 bg-[#F8F8F8] hidden group-hover/lang:bg-white group-hover/lang:block sm_mobile:w-fit
                                    animate__animated animate__fadeInUp animate__fast'
                            >
                                <ul className='font-poppins bg-[#F8F8F8] text-[14px] border-x border-[#F0F0F0] space-y-3 group-hover/lang:bg-white transition ease-out duration-1000'>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>UK</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>Euro</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>Spanish</li>
                                    <li className='hover:underline py-1 px-3 border-b border-[#F0F0F0]'>USD</li>
                                </ul>                    
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mt-2 lg_tablet:mt-0' />
            <section className='w-full flex items-center justify-center'>        {/* section2 */}
                <div className=' flex flex-wrap items-center justify-between py-0
                    sm_mobile:flex-row sm_mobile:gap-10 sm_mobile:py-5
                    md_tablet:w-[90%] md_tablet:justify-between md_tablet:flex-row md_tablet:gap-0
                    lg_tablet:py-0 lg_tablet:w-full lg_tablet:gap-5 lg_tablet:flex-nowrap md_desktop:gap-20
                    sm_mobile:px-5 lg_tablet:px-10 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80'
                >
                    <div className='w-full flex items-center justify-center md_tablet:w-fit'>
                        <Link to="/">
                            <img
                                src={Logo}
                                className='cursor-pointer'
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className='sm_mobile:hidden lg_tablet:block'>
                        <ul className='flex gap-14 font-poppins font-medium text-[15px] text-[#222222]'>
                            <li className='cursor-pointer py-10'> <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#ff4135]' : 'text-[#222] hover:text-[#ff4135] transition ease-linear duration-200')} > Home  </NavLink> </li>
                            <li className='relative py-10 group/pages'>
                                <NavLink to='/services' className={isAnyActive ? 'text-[#ff4135]' : 'text-[#222]  hover:text-[#ff4135] transition ease-linear duration-200'}>
                                    Pages <KeyboardArrowDownSharpIcon />
                                </NavLink>
                                <div className='w-64 px-10 absolute z-20 left-0 top-[100%] hidden bg-[#F8F8F8] group-hover/pages:bg-white group-hover/pages:block navLinkBoxShadow animate__animated animate__fadeInUp animate__fast'>
                                    <ul className='font-poppins font-medium text-[14px] text-[#222] bg-[#F8F8F8] border-y-[#F0F0F0] space-y-3 group-hover/pages:bg-white'>
                                        <NavItem to="/about-us">About Us</NavItem>
                                        <NavItem to="/services">Our Services</NavItem>
                                        <NavItem to="/team">Our Team</NavItem>
                                        <NavItem to="/404">404</NavItem>
                                    </ul>
                                </div>
                            </li>
                            <li className='cursor-pointer py-10'>
                                <NavLink to="/categories" className={({ isActive }) => (isActive ? 'text-[#ff4135]' : 'text-[#222] hover:text-[#ff4135] transition ease-linear duration-200')}>
                                    Categories
                                </NavLink>
                            </li>
                            <li className='cursor-pointer py-10'>
                                <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-[#ff4135]' : 'text-[#222] hover:text-[#ff4135] transition ease-linear duration-200')}>
                                    Products 
                                </NavLink>
                            </li>
                            <li className='cursor-pointer py-10'>
                                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-[#ff4135]' : 'text-[#222] hover:text-[#ff4135] transition ease-linear duration-200')}> 
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='lg_tablet:hidden'>        {/* Sidebar */}
                        <MenuOutlinedIcon className='border border-black cursor-pointer' style={{width: '50px', height:'40px',}} onClick={ToggleMenu} />
                    </div>
                    <div className='flex justify-between'>
                    {Menu ? (
                        <>
                            <div className='fixed top-0 left-0 h-screen w-screen z-40'>
                                <section
                                    className='fixed top-0 left-0 h-screen w-screen overflow-x-hidden bg-[#ff4135] bg-opacity-70 z-30 animate__animated animate__slideInLeft animate__faster'
                                    onClick={ToggleMenu}
                                >
                                </section>
                                <section
                                    className='fixed top-0 left-0 flex flex-col bg-[#202020] w-[300px] h-screen overflow-x-hidden z-40  animate__animated animate__slideInLeft animate__fast'
                                >
                                    <div className='flex items-end justify-end py-2 px-4'>
                                        <CancelOutlinedIcon className=' text-white cursor-pointer' style={{fontSize: '40px',}} onClick={ToggleMenu} />
                                    </div>
                                    <div className='flex flex-col justify-between gap-32'>
                                        <div className='px-7'>
                                            <img
                                                className=''
                                                src={Logo2}
                                                alt="Castro."
                                            />
                                        </div>
                                        <div className='font-poppins text-[17px] font-medium uppercase text-white'>
                                                
                                                    <NavLink
                                                        to="/"
                                                        className={({ isActive }) => (isActive ? 'text-[#ff6a60] border-l-8 border-l-stone-100 w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600' : 'w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600')}
                                                        onClick={ToggleMenu}
                                                    >
                                                        home 
                                                        <KeyboardArrowDownSharpIcon className='bg-[#ffffff1a] rounded-sm p-1 text-white cursor-pointer' style={{fontSize: '30px'}}/> 

                                                    </NavLink>

                                                    <NavLink
                                                        to="/categories"
                                                        className={({ isActive }) => (isActive ? 'text-[#ff6a60] border-l-8 border-l-stone-100 w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600' : 'w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600')}
                                                        onClick={ToggleMenu}
                                                    >
                                                        categories 
                                                        <KeyboardArrowDownSharpIcon className='bg-[#ffffff1a] rounded-sm p-1 text-white cursor-pointer' style={{fontSize: '30px'}}/> 

                                                    </NavLink>

                                                    <NavLink
                                                        to="/products"
                                                        className={({ isActive }) => (isActive ? 'text-[#ff6a60] border-l-8 border-l-stone-100 w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600' : 'w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600')}
                                                        onClick={ToggleMenu}
                                                    >
                                                        products 
                                                        <KeyboardArrowDownSharpIcon className='bg-[#ffffff1a] rounded-sm p-1 text-white cursor-pointer' style={{fontSize: '30px'}}/> 

                                                    </NavLink>

                                                    <NavLink
                                                        to="/services"
                                                        className={({ isActive }) => (isActive ? 'text-[#ff6a60] border-l-8 border-l-stone-100 w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600' : 'w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600')}
                                                        onClick={ToggleMenu}
                                                    >
                                                        services 
                                                        <KeyboardArrowDownSharpIcon className='bg-[#ffffff1a] rounded-sm p-1 text-white cursor-pointer' style={{fontSize: '30px'}}/> 

                                                    </NavLink>

                                                    <NavLink
                                                        to="/team"
                                                        className={({ isActive }) => (isActive ? 'text-[#ff6a60] border-l-8 border-l-stone-100 w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600' : 'w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600')}
                                                        onClick={ToggleMenu}
                                                    >
                                                        our team 
                                                        <KeyboardArrowDownSharpIcon className='bg-[#ffffff1a] rounded-sm p-1 text-white cursor-pointer' style={{fontSize: '30px'}}/> 

                                                    </NavLink>

                                                    <NavLink
                                                        to="/about-us"
                                                        className={({ isActive }) => (isActive ? 'text-[#ff6a60] border-l-8 border-l-stone-100 w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600' : 'w-fll flex items-center justify-between py-3 pl-5 border-y border-y-gray-600')}
                                                        onClick={ToggleMenu}
                                                    >
                                                        about 
                                                        <KeyboardArrowDownSharpIcon className='bg-[#ffffff1a] rounded-sm p-1 text-white cursor-pointer' style={{fontSize: '30px'}}/> 

                                                    </NavLink>
                                                


                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <div className='flex flex-col gap-8 font-poppins font-medium text-[#FFFFFFCC]'>
                                                <div>
                                                    <h2 className='text-[24px] text-[#ffffff] font-josefin-sans font-semibold'>Contact Info</h2>
                                                </div>
                                                <div className='flex flex-col gap-3 font-poppins font-medium text-[#FFFFFFCC]'>
                                                    <p>Chicago 12, Melborne City, USA</p>
                                                    <a href="tel: +88 01682648101">+88 01682648101</a>
                                                    <a href="mailto: info@example.com">info@example.com</a>
                                                </div>
                                                <div className="flex items-center gap-5 mt-16 mb-24">
                                                    <FacebookIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}} />
                                                    <TwitterIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}}/>
                                                    <PinterestIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}}/>
                                                    <GoogleIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}} />
                                                    <YouTubeIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </>
                    ) : (``)
                    }
                        <div className='flex sm_mobile:gap-2 lg_tablet:gap-3'>
                            <SearchOutlinedIcon className='cursor-pointer text-[#36454F] hover:text-[#ff4135]' style={{fontSize: '30px', transition: '0.3s ease-out',}} />
                            <FavoriteBorderOutlinedIcon className='cursor-pointer text-[#36454F] hover:text-[#ff4135]' style={{fontSize: '30px', transition: '0.3s ease-out',}}  />
                            <PersonOutlineOutlinedIcon className='cursor-pointer text-[#36454F] hover:text-[#ff4135]' style={{fontSize: '30px', transition: '0.3s ease-out',}}  />
                            <Link to='/cart'>
                                <span className='relative'>
                                    <ShoppingCartOutlinedIcon className=' cursor-pointer text-[#36454F] hover:text-[#ff4135]' style={{fontSize: '30px', transition: '0.3s ease-out',}}  />
                                    {cartItems.length >= 1 && (
                                        
                                        <div
                                            className='absolute right-[2px] top-[-20px] sm_desktop:-right-[12px] sm_desktop:top-[-23px] md_desktop:-right-[.5rem] md_desktop:-top-[.8rem] lg_desktop:right-[-15px] lg_desktop:top-[-20px]
                                            z-10 flex items-center justify-center cart-icon-black
                                            animate__animated animate__flash animate__slow animate__infinite'
                                        >
                                           <p className='text-center text-[12px] font-bold'>{cartItems.length}</p>                                        
                                        </div>
                                    )}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar