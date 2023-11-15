import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import NorthEastIcon from '@mui/icons-material/NorthEast'


function NewsComponent(props) {
  return (
    <>
      <div className='flex flex-col border border-[#D3D3D3] max-w-[350px] lg_tablet:max-w-[370px] overflow-hidden hover:shadow-xl hover:transition ease-in-out duration-75' data-aos="zoom-in"  data-aos-duration="2000">
        <div className='max-h-[240px] overflow-hidden'>
        <img
          className='cursor-pointer inline-block overflow-hidden align-center hover:scale-[1.1] transition-all  duration-500'
          src={props.image}
          alt=""
        />
        </div>
        <div className='py-4 px-5 space-y-4'>
          <p className='font-poppins text-[#22222] text-[1rem]'> <HorizontalRuleIcon /> {props.date} </p>
          <h2 className='font-josefin-sans font-semibold text-[25px] text-[#22222] leading-8 cursor-pointer hover:text-[#ff4135] transition ease-out duration-300'> {props.headline} </h2>
          <span className='inline-flex space-x-1'>
            <h2 className='font-poppins font-normal text-[1rem] text-[#848484] cursor-pointer hover:text-[#ff4135] transition ease-out duration-300'>
              {props.admin ? "by admin " : "by user " }
            </h2>
            <HorizontalRuleIcon className='rotate-90 text-[#848484]' />
            <h2 className='font-poppins font-normal text-[1rem] text-[#848484] cursor-pointer hover:text-[#ff4135] transition ease-out duration-300'>
              {props.comments}
            </h2>
          </span>
          <p className='font-poppins text-[15px] text-[#848484]'> {props.desc} </p>
          <div className='group/rm max-w-fit cursor-pointer'>
            <h2 className='font-poppins font-medium text-[1rem]'> Read More <NorthEastIcon className='group-hover/rm:rotate-45 transition-transform ease-linear duration-300'/> </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsComponent