import { useState, useEffect } from 'react';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined'


const ScrollToTop = () => {

    const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.15) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return (
        <button
            onClick={handleBackToTop}
            className={`fixed z-40 bottom-[10%] right-[5%] ${showSticky ? 'block' : 'hidden'} px-5 py-3
              w-10 h-10 sm_desktop:w-16 sm_desktop:h-16 rounded-full bg-[#ff4135] hover:bg-black text-white transition ease-linear duration-200
              flex items-center justify-center animate__animated animate__fadeInUpBig`}
        >
          <NorthOutlinedIcon style={{fontSize: '30px'}} />
        </button>
    )
}

export default ScrollToTop