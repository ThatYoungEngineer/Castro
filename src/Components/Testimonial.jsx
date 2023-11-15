import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

const Testimonial = (props) => {
  return (
    <>
        <section className='flex items-center justify-between flex-col gap-10 max-w-[350px] h-full'>
            <div className='relative border border-[#e5e5e5] flex flex-col items-center justify-center gap-5 bg-white p-10 pointer-events-none'>
                <p className='font-poppins font-light text-[15px] text-[#848484] text-center'>
                    {props.desc}
                </p>
                <div>
                    <h2 className='font-josefin-sans font-semibold text-[20px] text-[#222] text-center'>{props.name}</h2>
                    <h3 className='font-poppins font-normal text-[15px] text-[#848484] text-center'>{props.niche}</h3>
                </div>
                <div className='absolute bottom-[-20px] bg-white'>
                    <ExpandMoreOutlinedIcon className='text-[#e5e5e5]' style={{fontSize: '40px'}} />
                </div>
            </div>
            <div>
                <img
                    src={props.image} 
                    alt="user"
                />
            </div>
        </section>
    </>
  )
}

export default Testimonial