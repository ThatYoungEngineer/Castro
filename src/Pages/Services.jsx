import backgroundBanner from '../assets/images/product-bg-cover.jpg'
import Image1 from '../assets/images/service-1.jpg'
import Image2 from '../assets/images/service-2.jpg'
import Image3 from '../assets/images/service-3.jpg'
import Sales from '../assets/images/sale-banner.jpg'
import Shape2 from '../assets/images/shape-2.png'
import Shape3 from '../assets/images/shape-3.png'
import Separator from '../assets/images/separator-1.png'
import testimonial1 from '../assets/images/testimonial-1.png'
import testimonial2 from '../assets/images/testimonial-2.png'
import testimonial3 from '../assets/images/testimonial-3.png'


import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import NorthEastIcon from '@mui/icons-material/NorthEast'


import Preloader from '../Components/Preloader'
import Testimonial from '../Components/Testimonial'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Services= () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 449,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                  slidesToShow: 1,
                  slidesToScroll: 1
                  
                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                  slidesToShow: 1,
                  slidesToScroll: 1
                  
                }
            }
        ]
    }
    return (
        <div>
            {/* <Preloader /> */}
            <div
                id='bg_banner'
                className="flex flex-col items-center justify-center py-20 px-0 "
                style={{ backgroundImage: `url(${backgroundBanner})` }}
            >
                <h2 className='font-josefin-sans font-semibold text-[46px] text-[#222]'>Our Services</h2>
                <div className='flex gap-2'>
                    <p className='font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear'>
                        Home
                    </p>
                    <span className='flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]'><ArrowForwardIosOutlinedIcon style={{fontSize: '10px', fontWeight: 'bold'}}/>
                        Our Services
                    </span>
                </div>
            </div>
            <section className='mt-32 w-full flex items-center justify-center sm_mobile:px-5 md_tablet:px-10 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80'> 
                <div className='w-full px-0 flex items-center justify-center flex-col gap-20'>
                    <div className='flex flex-col md_tablet:flex-row items-center justify-center gap-10'>
                        <div className='flex-1'>
                            <img className='w-full h-full' src={Image1} alt="" />
                        </div>
                        <div className='flex-1'>
                            <div className='sm_desktop:px-10 space-y-3 sm_desktop:space-y-10'>
                                <h2 className='font-josefin-sans font-semibold text-[40px] text-[#222] cursor-pointer  hover:text-[#ff4135] transition ease-in-out duration-500'>Fashion Design</h2>
                                <p className='font-poppins font-light text-[15px] text-[#848484]'>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici
                                </p>
                                <a
                                    href='#'
                                    className='inline-flex relative z-10 max-w-fit hover:text-white'> 
                                    <button className=" custom-button">
                                        View Catalog <NorthEastIcon className='rotate-12 ml-2' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md_tablet:flex-row items-center justify-center gap-10'>
                        <div className='flex-1'>
                            <div className='sm_desktop:px-10 space-y-3 sm_desktop:space-y-10 text-right'>
                                <h2 className='font-josefin-sans font-semibold text-[40px] text-[#222] cursor-pointer  hover:text-[#ff4135] transition ease-in-out duration-500'>Furniture Design</h2>
                                <p className='font-poppins font-light text-[15px] text-[#848484]'>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici
                                </p>
                                <a
                                    href='#'
                                    className='inline-flex relative z-10 max-w-fit hover:text-white'> 
                                    <button className=" custom-button">
                                        View Catalog <NorthEastIcon className='rotate-12 ml-2' />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-full' src={Image2} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col md_tablet:flex-row items-center justify-center gap-10'>
                        <div className='flex-1'>
                            <img className='w-full h-full' src={Image3} alt="" />
                        </div>
                        <div className='flex-1'>
                            <div className='sm_desktop:px-10 space-y-3 sm_desktop:space-y-10'>
                                <h2 className='font-josefin-sans font-semibold text-[40px] text-[#222] cursor-pointer  hover:text-[#ff4135] transition ease-in-out duration-500'>
                                    Handmade Craft
                                </h2>
                                <p className='font-poppins font-light text-[15px] text-[#848484]'>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici
                                </p>
                                <a
                                    href='#'
                                    className='inline-flex relative z-10 max-w-fit hover:text-white'> 
                                    <button className=" custom-button">
                                        View Catalog <NorthEastIcon className='rotate-12 ml-2' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='relative max-w-screen h-[80vh] md_tablet:h-[70vh] xm_desktop:h-[60vh] mt-32'>           { /* //absolute section// */ }
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
                            md_tablet:px-28 sm_desktop:px-48 md_desktop:px-40
                            lg_tablet:px-56 lg_desktop:px-48'
                        >
                            <h2 className='font-josefin-sans font-semibold md_tablet:font-semibold lg_tablet:text-[50px] text-[#222222] text-center
                                sm_mobile:text-[36px] sm_tablet:leading-[60px]'>End of Season Clearance Sale upto 50%</h2>
                            <h4 className='font-poppins font-medium text-[18px] text-[#222222] text-center'>Welcome to the new range of shaving products from master barber. We have over three decades of experience in the male grooming industry</h4>
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
            <section
                className='w-full sm_mobile:mt-56 lg_mobile:mt-80 md_tablet:mt-52 sm_desktop:mt-60 md_desktop:mt-48 flex items-center justify-center flex-col 
                sm_mobile:px-5 lg_mobile:px-10 xl_mobile:px-12 md_tablet:px-14 lg_tablet:px-16 sm_desktop:px-20 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'
            >
                <div className='flex flex-col justify-center items-center gap-2 mt-5'>
                    <h2 className="font-josefin-sans font-semibold text-[#222222] text-[35px] text-center">Testimonials</h2>
                    <p className="font-poppins text-[14px] text-[#222222] text-center leading-7">Excepteur sint occaecat cupidatat non proident sunt</p>
                    <a href="" className='pointer-events-none mt-1 mb-6'>
                    <img
                        src= {Separator}
                        alt=""
                    />
                    </a>
                </div>
                <div className='w-full relative mb-20 xm_desktop:pl-[4%] py-7'>
                    <Slider {...settings} className='max-w-full block'>
                        <div>
                            <Testimonial
                                desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, animi saepe, mollitia nobis veritatis vero recusandae sit voluptatem totam sint ullam eius quidem odit itaque autem nemo harum omnis dicta."
                                name = "Henry Brooks"
                                niche = "Project Manager"
                                image = {testimonial1}
                            />
                        </div>
                        <div>
                            <Testimonial
                                desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, animi saepe, mollitia nobis veritatis vero recusandae sit voluptatem totam sint ullam eius quidem odit itaque autem nemo harum omnis dicta."
                                name = "Natasha Fox"
                                niche = "Co-Founder"
                                image = {testimonial2}
                            />
                        </div>
                        <div>
                            <Testimonial
                                desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, animi saepe, mollitia nobis veritatis vero recusandae sit voluptatem totam sint ullam eius quidem odit itaque autem nemo harum omnis dicta."
                                name = "Smith Odin"
                                niche = "CEO"
                                image = {testimonial3}
                            />
                        </div>
                        <div>
                            <Testimonial
                                desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, animi saepe, mollitia nobis veritatis vero recusandae sit voluptatem totam sint ullam eius quidem odit itaque autem nemo harum omnis dicta."
                                name = "Natasha Fox"
                                niche = "Project Manager"
                                image = {testimonial1}
                            />
                        </div> 
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default Services