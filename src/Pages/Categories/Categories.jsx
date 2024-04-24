import backgroundBanner from '../../assets/images/product-bg-cover.jpg'

import Preloader from '../../Components/Preloader'
import CategoryCard from '../../Components/CategoryCard'

import categoriesData from './categoriesData'

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Categories = () => {



    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 2000,

        className: "center",
        centerMode: true,
        centerPadding: "12%",

        autoplaySpeed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerPadding: "10%",
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: "8%",
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    centerPadding: "6%",
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: "4%",
                }
            },
            {
                breakpoint: 950,
                settings: {
                    centerPadding: "-1%",
                }
            },
            {
                breakpoint: 850,
                settings: {
                    centerPadding: "-7%",
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "10%",
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "6%",
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "4%",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "0%",
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20%",
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "15%",
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "10%",
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "5%",
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "1%",
                }
            },
        ]
    }
    

  return (
    <>
        {/* <Preloader /> */}
        <div
            id='bg_banner'
            className="flex flex-col items-center justify-center py-20 px-0 "
            style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
            <h2 className='font-josefin-sans font-semibold text-[46px] text-[#222]'>Categories</h2>
            <div className='flex gap-2'>
                <p className='font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear'>
                    Home
                </p>
                <span className='flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]'><ArrowForwardIosOutlinedIcon style={{fontSize: '10px', fontWeight: 'bold'}}/>
                    Categories
                </span>
            </div>
        </div>
        <section className='my-32 sm_mobile:px-5 sm_tablet:px-8 md_tablet:px-16 lg_tablet:px-16 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80'>
            <Slider {...settings}>
                {categoriesData.map((category) => (                    
                    <div key={category.id}>
                        <CategoryCard
                            image={category.img}
                            headline={category.headline}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    </>
  )
}

export default Categories