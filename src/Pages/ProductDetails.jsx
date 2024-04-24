import backgroundBanner from '../assets/images/product-bg-cover.jpg'
import star from '../assets/images/star.png'
import separator from '../assets/images/separator-3.png'
import review1 from '../assets/images/review-1.png'
import hollowStar from '../assets/images/hollowstar.png'


import Preloader from '../Components/Preloader'
import CollectionCard from '../Components/CollectionCard'

import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/cartSlice'

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GoogleIcon from '@mui/icons-material/Google'
import NorthEastIcon from '@mui/icons-material/NorthEast'

import productsData from './Products/productsData'


const ProductDetails = ( {children} ) => {
   
    const [selectedDivIndex, setSelectedDivIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [content, setContent] = useState('description')
    
    const products = productsData
    const dispatch = useDispatch()
    
    
    const colorArray = ['bg-black', 'bg-blue-500', 'bg-red-400', 'bg-slate-200', 'bg-purple-600']
  
    const getDivClassName = (index) => {
      return index === selectedDivIndex ? 'transform scale-125 colorButtonShadow' : ''
    }

    const handleImageClick = (image) => {
      setSelectedImage(image)
    }

    const handleIncrement = () => {
        setCount(prevCount => (prevCount < 10 ? prevCount + 1 : prevCount))
    }

    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount))
    }

    const handleInputChange = event => {
        let inputCount = parseInt(event.target.value, 10)
        inputCount = Math.min(Math.max(0, inputCount), 10)
        setCount(inputCount)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const handleContent = (contentType) => {
        setContent(contentType)
    }
    
    const { productId } = useParams()
    // const history = useHistory()
    const navigate = useNavigate()
    
    const productIdNumber = parseInt(productId, 10)
    const product = products.find((product) => product.id === productIdNumber)
    const [selectedImage, setSelectedImage] = useState(product.img)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };


    useEffect(() => {
      if (!product) {
        navigate("/404")
      }
    }, [product])
    
    console.log(product)

  return (
    <div>
        <Preloader />
        <div
            id='bg_banner'
            className="flex flex-col items-center justify-center py-20 px-0 "
            style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
            <h2 className='font-josefin-sans font-semibold text-[40px] lg_tablet:text-[46px] text-[#222]'>Product Details</h2>
            <div className='flex gap-2'>
                <p className='font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear'>
                    Home
                </p>
                <span className='flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]'><ArrowForwardIosOutlinedIcon style={{fontSize: '10px', fontWeight: 'bold'}}/>
                    Product Details
                </span>
            </div>
        </div>
        <section className='w-full px-5 sm_desktop:px-20 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80 my-20 flex flex-col items-center justify-center'>    {/* //my-32 */}
            <div className='w-full flex flex-col lg_tablet:flex-row gap-10'>
                <div className='w-full flex flex-col md_tablet:flex-row gap-3'>
                    <div className='flex flex-row md_tablet:flex-col gap-3'>
                                <img
                                    key={product.id}
                                    src={product.img}
                                    alt={product.name}
                                    className={`w-[120px] h-[150px] cursor-pointer ${product.img === selectedImage ? 'opacity-100' : 'opacity-50'} transition-all duration-500`}
                                    onClick={() => handleImageClick(product.img)}
                                />
                    </div>
                    <div className='flex-grow px-[] lg_tablet:px-0'>
                        <img
                            src={selectedImage}
                            alt="Large Image"
                            className={`w-fit h-fit opacity-100 transition-all duration-500`}
                        />
                    </div>
                </div>
                <div className=' flex flex-col gap-5 px-2'>
                    <h2 className='font-poppins font-semibold text-[24px] text-[#222] '>Multi-Way Ultra Crop Top</h2>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-1 pointer-events-none'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <span className='font-poppins font-normal text-[15px] text-[#848484]'>
                            (5 Reviews)
                        </span>
                    </div>
                    <h3 className='font-poppins font-medium text-[18px] text-[#222]'>${product.price}</h3>
                    <p className='font-poppins font-light text-[15px] text-[#848484]'>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspic atis unde omnis iste natus.
                    </p>
                    <h2 className='font-poppins font-medium text-[#222] text-[18px]'>Size:</h2>
                    <div className="flex gap-6 font-poppins font-semibold text-[15px] text-[#848484]" >
                        <label className="cursor-pointer flex items-center">
                            <input type="radio" name="size" value="large" className="mr-2" defaultChecked />
                            L
                        </label>
                        <label className="cursor-pointer flex items-center">
                            <input type="radio" name="size" value="x-large" className="mr-2" />
                            XL
                        </label>
                        <label className="cursor-pointer flex items-center">
                            <input type="radio" name="size" value="medium" className="mr-2" />
                            M
                        </label>
                        <label className="cursor-pointer flex items-center">
                            <input type="radio" name="size" value="small" className="mr-2" />
                            S
                        </label>
                        <label className="cursor-pointer flex items-center">
                            <input type="radio" name="size" value="x-small" className="mr-2" />
                            XS
                        </label>
                    </div>
                    <h2 className='font-poppins font-medium text-[#222] text-[18px]'>Color:</h2>
                    <span className='w-fit flex items-center justify-center gap-5'>
                        {colorArray.map((color, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer w-5 h-5 rounded-full ${color} ${getDivClassName(index)}`}
                                onClick={() => setSelectedDivIndex(index)}
                            />
                        ))}
                    </span>
                    <span className='mt-5 w-fit flex flex-col lg_tablet:flex-row gap-5'>
                        <div className='w-fit px-2 py-3 flex items-center justify-center border border-[#e6e6e6]'>
                            <RemoveIcon
                                className='text-[#848484] cursor-pointer'
                                onClick={handleDecrement}                            
                            />
                            <input
                                type="number"
                                value={count}
                                onChange={handleInputChange}
                                className="w-16 text-center outline-none font-poppins text-[16px] font-semibold text-[#222]"
                            />
                            <AddIcon
                                className='text-[#848484] cursor-pointer'
                                onClick={handleIncrement}
                            />
                        </div>
                        <span
                            className='inline-flex relative z-10 max-w-fit hover:text-white'
                        > 
                            <button 
                                className="CartButton" 
                                onClick={() => handleAddToCart(product)}
                            >
                                Add To Cart
                            </button>
                        </span>
                        <div className='flex  gap-3'>

                        <div className='w-14 h-14 cursor-pointer flex items-center justify-center border border-[#e6e6e6] py-3 px-4 group/heart hover:bg-[#ff4135] transition ease-in duration-300'>
                            <FavoriteBorderIcon className='text-[#222] group-hover/heart:text-white' />
                        </div>
                        <div className='w-14 h-14 cursor-pointer flex items-center justify-center border border-[#e6e6e6] py-3 px-4 group/mag hover:bg-[#ff4135] transition ease-in duration-300'>
                            <SearchIcon className='text-[#222] group-hover/mag:text-white' />
                        </div>
                        </div>
                    </span>
                    <div className='font-poppins text-[15px] text-[#848484] space-y-2 mt-5'>
                        <p>SKU: 05</p>
                        <p>Category: Accessories</p>
                        <p>Tags: glasses, t-shirts, watches</p>
                    </div>
                    <div className='flex gap-5'>
                        <h2 className='font-poppins font-medium text-[#222] text-[18px]'>Follow Us:</h2>
                        <div className="flex items-center justify-center gap-5 sm_mobile:gap-3">
                            <FacebookIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '20px', transition: '0.3s ease-out',}} />
                            <TwitterIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}}/>
                            <GoogleIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}} />
                            <YouTubeIcon className='text-[#d0d0d0] hover:text-[#ff4135]' style={{fontSize: '25px', transition: '0.3s ease-out',}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=' my-0 px-5 sm_desktop:px-20 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80 w-full flex items-center justify-center'>    {/* //my-32 */}
            <div className=' flex flex-col gap-5'>  {/* //w-80 */}
                <span className='flex gap-10'> 
                    <h2
                        className={`cursor-pointer font-poppins font-medium text-[18px]
                        ${content === 'description' ? 'border-b border-[#222]  text-[#222]' : 'text-[#848484]'}`}
                        onClick={() => handleContent('description')}
                        >
                        Description
                    </h2>
                    <h2
                        className={`cursor-pointer font-poppins font-medium text-[18px] 
                        ${content === 'reviews' ? 'border-b border-[#222] text-[#222]': 'text-[#848484]'}`}
                        onClick={() => handleContent('reviews')}
                    >
                        Reviews(1)
                    </h2>
                </span>
                {content === 'description'
                    ? (
                        <div className='flex flex-col gap-5'>
                            <p className='font-poppins font-normal text-[15px] text-[#848484] leading-7'>
                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className='font-poppins font-normal text-[15px] text-[#848484] leading-7'>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesc iunt. neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    ) : content === 'reviews' ? (
                    <div className='flex flex-col gap-5 '>
                        <h2 className='font-poppins font-medium text-[18px] text-[#222]'>1 Review for Multi-Way Ultra Crop Top</h2>
                        <div className='flex gap-5 mt-5'>
                            <img
                                className='w-fit h-fit'
                                src= {review1}
                                alt=""
                            />
                            <div className='flex flex-col gap-3'>
                                <span className='flex gap-1'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={hollowStar} alt="" className='w-[24px] h-[24px]' />
                                </span>
                                <span className='flex gap-2'>
                                    <h2 className='font-poppins font-semibold text-[16px] min-w-fit text-[#222]'>Eileen Alene</h2>
                                    <h2 className='font-poppins font-semibold text-[16px] text-[#222]'>-</h2>
                                    <h2 className='font-poppins font-normal text-[15px] text-[#848484]'>May 1, 2020</h2>
                                </span>
                                <p className='font-poppins font-normal text-[15px] text-[#848484]'>
                                    Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim est laborum. Sed perspiciatis unde omnis natus error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi arch tecto beatae vitae dicta.
                                </p>
                            </div>
                        </div>
                        <hr className='my-10'/>
                        <form action="" onSubmit={handleSubmit}>
                            <h2 className='font-poppins font-medium text-[18px] text-[#222]'>Be First to Review For “Multi-Way Ultra Crop Top”</h2>
                            <span className='flex gap-10 mt-5'>
                                <h3 className='font-poppins font-medium text-[16px] text-[#222]'>Your Rating</h3>
                                <span className='flex gap-1'>
                                    <img src={hollowStar} alt="" className='w-[20px] h-[20px] pointer-events-none' />
                                    <img src={hollowStar} alt="" className='w-[20px] h-[20px] pointer-events-none' />
                                    <img src={hollowStar} alt="" className='w-[20px] h-[20px] pointer-events-none' />
                                    <img src={hollowStar} alt="" className='w-[20px] h-[20px] pointer-events-none' />
                                    <img src={hollowStar} alt="" className='w-[20px] h-[20px] pointer-events-none' />
                                </span>
                            </span>
                            <div className='flex flex-col mt-5'>
                                <h3  className='font-poppins font-normal text-[16px] text-[#848484]'>Your Review</h3>
                                <textarea 
                                    name=""
                                    className="w-full h-52 p-5 border border-[#e6e6e6] resize-none outline-none font-poppins font-normal text-[16px] text-[#848484]
                                    focus:border-[#ff4135] transition ease-in duration-200"
                                >
                                </textarea>
                                <div className='w-full flex flex-wrap gap-7 mt-10'>
                                    <div className='w-full flex flex-col gap-1'>
                                        <h3 className='font-poppins font-normal text-[16px] text-[#848484]'>Your Name</h3>
                                        <input 
                                            type="text"
                                            className='border w-full p-3 border-[#e6e6e6] outline-none font-poppins font-normal text-[16px] text-[#848484]
                                            focus:border-[#ff4135] transition ease-in duration-200'
                                        />
                                    </div>
                                    <div className='w-full flex flex-col gap-1'>
                                        <h3 className='font-poppins font-normal text-[16px] text-[#848484]'>Your Email</h3>
                                        <input 
                                            type="email"
                                            className='border w-full p-3 border-[#e6e6e6] outline-none font-poppins font-normal text-[16px] text-[#848484]
                                            focus:border-[#ff4135] transition ease-in duration-200'
                                        />
                                    </div>
                                </div>   
                                <div className='mt-5'>
                                    <input type="checkbox" id="formCheck" name="formCheck" />
                                    <label
                                        className='ml-3 font-poppins text-[15px] text-[#848484] cursor-pointer'
                                        htmlFor="formCheck"
                                        onClick={() => toggleCheckbox()}
                                    >
                                        Save my name, email, and website in this browser for the next time I comment
                                    </label>
                                </div> 
                                <a
                                    href='#'
                                    className='mt-5 inline-flex relative z-10 max-w-fit hover:text-white'
                                > 
                                    <button
                                        type='submit'
                                        className=" custom-button2"
                                    >
                                        Submit Your Reviews <NorthEastIcon className='rotate-12 ml-2' />
                                    </button>
                                </a> 
                            </div>
                        </form>
                    </div>
                ) : (
                    null
                )}
            </div>
        </section>
        <section className='w-full mt-10 px-5 sm_desktop:px-20 md_desktop:px-24 xm_desktop:px-44 lg_desktop:px-80 flex items-center justify-center mb-32'>
            <div className='w-full flex flex-col gap-5'>          {/* w-80  */}
                <h2 className='font-josefin-sans font-semibold text-[30px] lg_tablet:text-[40px] text-[#222]'>Related Products</h2>
                <p className='font-poppins text-[15px] text-[#222]'>There are some product that we featured for choose your best</p>
                <img
                    className='w-[100px]'
                    src={separator}
                    alt=""
                />
                <span className='w-full mt-16 lg_tablet:mt-10 flex items-center justify-center md_tablet:justify-center gap-8 md_tablet:gap-20 lg_tablet:gap-8 sm_desktop:justify-center sm_desktop:gap-x-[2%] sm_desktop:gap-y-10   flex-wrap'>
                    {products.slice(0, 8).map((product) => (
                        <div key={product.id}>
                        <CollectionCard
                            image={product.img}
                            desc={product.name}
                            price={product.price}
                            product={true && product}
                        />
                        </div>
                    ))}
                </span>
            </div>
        </section>
    </div>
  )
}

export default ProductDetails