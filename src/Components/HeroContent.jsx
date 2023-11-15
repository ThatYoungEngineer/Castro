import { useState, useEffect } from "react"
import NorthEastIcon from '@mui/icons-material/NorthEast'


const HeroContent = ({ persons }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [key, setKey] = useState(0)

  const classList = [
    'animate__animated animate__fadeInUp  animate__slow	',
    'animate__animated animate__fadeInUp  animate__slow	',
    'animate__animated animate__fadeInBottomLeft   animate__slow	'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % persons.length);
      setKey(prevKey => prevKey + 1)
    }, 2500)

    return () => clearInterval(interval)
  }, [persons]);

  
  return (
    <>
      <div className='flex items-center justify-between
        sm_mobile:px-5 lg_tablet:px-16
        sm_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
          <div className="font-josefin-sans md_tablet:text-[70px] font-semibold flex flex-col justify-center z-10 sm_mobile:text-[50px]">
            <p
              className="max-w-fit leading-[70px] animate__animated animate__fadeInDown bottom__delay">Up To <br /> <span className="text-[#ff4135]">50%</span> <br className='md_tablet:hidden'/> Discount
            </p>
            <p className=" max-w-fit break-normal text-[26px] text-[#22222] animate__animated animate__fadeInRight right__delay">
              Summer Lookbook - 2020
            </p>
            <p
              className="max-w-[95%] text-[18px] text-[#22222] font-normal font-poppins my-7 animate__animated animate__fadeInLeft left__delay">New Modern Stylish Fashionable Men's Wear Jeans Shirt.
            </p>
            <a
              href='#collections'
              className='inline-flex relative z-10 max-w-fit hover:text-white animate__animated animate__fadeInUp up__delay'> 
              <button className=" custom-button">
               <span className="font-bold"> Explore Now</span> <NorthEastIcon className='rotate-12 ml-2'/>
              </button>
            </a>
          </div>
          <div className='hidden md_tablet:block h-fit overflow-y-hidden absolute bottom-0 right-5 xm_desktop:right-48'>
          <img
            key={key}
            className={`h-full w-full ${classList[currentImageIndex]}`}
            src={persons[currentImageIndex]}
            alt=""
          />           
        </div>
      </div>
    </>
  )
}

export default HeroContent