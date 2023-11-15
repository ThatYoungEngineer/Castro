import { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'

import Logo2 from '../assets/images/logo-2.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4135',
    },
  },
});

function Preloader() {
  const [showPreLoader, setPreLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreLoader(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

    useEffect(() => {
        if (showPreLoader) {
        document.body.style.overflowY = 'hidden'
        } else {
        document.body.style.overflowY = 'scroll'
        }    
        return () => {
        document.body.style.overflowY = 'scroll'
        };
    }, [showPreLoader])


  return (
    <ThemeProvider theme={theme}>
      {showPreLoader && (
        <div className='h-screen w-screen bg-[#222] text-white fixed top-0 left-0 z-50 flex items-center justify-center overflow-hidden'>
          <section className='flex items-center justify-between gap-3 flex-col'>
            <img src={Logo2} alt='' />
            <Box sx={{ width: '100%', height: 3}}>
              <LinearProgress sx={{ width: '100%', height: 3, backgroundColor: '#ccc' }} color='primary' />
            </Box>
          </section>
        </div>
      )}
    </ThemeProvider>
  );
}

export default Preloader;
