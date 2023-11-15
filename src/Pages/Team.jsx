import backgroundBanner from '../assets/images/product-bg-cover.jpg'
import team1 from '../assets/images/team-1.jpg'
import team2 from '../assets/images/team-2.jpg'
import team3 from '../assets/images/team-3.jpg'
import team4 from '../assets/images/team-4.jpg'
import team5 from '../assets/images/team-5.jpg'
import team6 from '../assets/images/team-6.jpg'


import Preloader from '../Components/Preloader'
import CollectionCard from '../Components/CollectionCard'

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

function Team() {
  return (
    <div>
        {/* <Preloader /> */}
        <div
            className="flex flex-col items-center justify-center py-20 px-0 "
            style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
            <h2 className='font-josefin-sans font-semibold text-[46px] text-[#222]'>Our Experts</h2>
            <div className='flex gap-2'>
                <p className='font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear'>
                    Home
                </p>
                <span className='flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]'><ArrowForwardIosOutlinedIcon style={{fontSize: '10px', fontWeight: 'bold'}}/>
                    Our Experts
                </span>
            </div>
        </div>
        <section className='w-full my-32 flex flex-row items-center justify-center flex-wrap'>
            <div className='w-full flex items-center justify-center flex-wrap gap-10 lg_tablet:justify-between lg_tablet:gap-0 sm_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80'>
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
                    <CollectionCard
                        team = {true}
                        image={team4}
                        name= "Edward Chapman"
                        niche= "Photographer"
                    />
                    <CollectionCard
                        team = {true}
                        image={team5}
                        name= "Daisy Murray"
                        niche= "Manager"
                    />
                    <CollectionCard
                        team = {true}
                        image={team6}
                        name= "Mitchel Darrel"
                        niche= "Artist"
                    />
                </div>
        </section>
    </div>
  )
}

export default Team