import Preloader from '../Components/Preloader'

import backgroundBanner from '../assets/images/product-bg-cover.jpg'

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import NorthEastIcon from '@mui/icons-material/NorthEast'

import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <>
        <Preloader />
        <div
            className="flex flex-col items-center justify-center py-20 px-0 "
            style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
            <h2 className='font-josefin-sans font-semibold text-[30px] xl_mobile:text-[46px] text-[#222] text-center'>Page Not Found</h2>
            <div className='flex gap-2'>
                <p className='font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear'>
                    Home
                </p>
                <span className='flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]'><ArrowForwardIosOutlinedIcon style={{fontSize: '10px', fontWeight: 'bold'}}/>404</span>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-10'>
            <h2 className='font-josefin-sans font-semibold text-[170px] text-[#222] text-center'>404</h2>
            <div className='flex flex-col items-center justify-center gap-1'>
                <h2 className='font-josefin-sans font-semibold text-[30px] xl_mobile:text-[46px] text-[#848484] text-center'>Oops! Page Not Found!</h2>
                <p className='font-poppins font-medium text-[15px] text-[#848484]'>Please go back to 
                    <span className='footerLinks' style={{color: 'red', fontWeight: '400', marginLeft: '8px'}} >
                        <Link to="/"> Back homepage </Link>
                    </span>
                </p>
            </div>
            <div className='flex gap-5 justify-center items-center flex-col sm_tablet: sm_tablet:flex-row mt-10 mb-32'>
                <Link to='/'>
                    <a
                        className='h-full inline-flex relative z-10 max-w-fit hover:text-white'> 
                        <button className=" custom-button2">
                            Go Back To Home <NorthEastIcon className='rotate-12 ml-2' />
                        </button>
                    </a>
                </Link>
                <Link to='/products'>
                    <a
                        className='h-full inline-flex relative z-10 max-w-fit hover:text-white'> 
                        <button className=" custom-button">
                            Continue Shopping <NorthEastIcon className='rotate-12 ml-2' />
                        </button>
                    </a>
                </Link>
            </div>
        </div>

    </>
  )
}

export default ErrorPage