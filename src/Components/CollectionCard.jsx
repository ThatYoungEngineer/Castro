import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import facebookIcon from '../assets/images/facebook-f.svg';
import linkedinIcon from '../assets/images/linkedin-in.svg';
import twitterIcon from '../assets/images/x-twitter.svg';

function CollectionCard(props) {
    const dispatch = useDispatch();
    const [showSocialIcons, setShowSocialIcons] = useState(false);

    const handleAddToCart = () => {
        if (props.product) {
            dispatch(addToCart(props.product));
        }
    };

    return (
        <div className="font-poppins text-[16px] text-[#222222] space-y-5" data-aos="fade-up"  data-aos-duration="1000" data-aos-once='true'>
            <div className="relative max-w-fit overflow-hidden group/overlay">
                {props.product && 
                    <Link to={`/products/${props.productId}`}>
                        <img
                            className='cursor-pointer w-[270px] h-[350px] bg-gray-200'
                            src={props.image}
                            alt={props.desc}
                        />
                    </Link>
                }
                {props.team &&
                    <img
                        className='cursor-pointer group-hover/overlay:scale-[1.05] transition-all duration-500 w-[270px] h-[350px] bg-gray-200'
                        src={props.image}
                        alt={props.name}
                    />       
                }
                {props.product &&
                    <div className='hidden absolute bottom-5 group-hover/overlay:flex items-center justify-center gap-1 w-full animate__animated animate__slideInUp animate__faster'>
                        <div className='w-10 h-10 cursor-pointer flex items-center justify-center  group/heart bg-[#222] hover:bg-[#ff4135] transition ease-in duration-300'>
                            <FavoriteBorderIcon className='text-white' />
                        </div>
                        <span className='w-fit h-fit'>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#4a4a4a', fontFamily: 'Poppins, sans-sarif', fontWeight: '700' }}
                                className='px-4 h-10 transition ease-in duration-300 hover:bg-red-500'
                                onClick={handleAddToCart}
                            >
                                Add To Cart
                            </Button>
                        </span>
                        <div className='w-10 h-10 cursor-pointer flex items-center justify-center  group/mag bg-[#222] hover:bg-[#ff4135] transition ease-in duration-300'>
                            <SearchIcon className='text-white' />
                        </div>
                    </div>
                }
                {props.team && 
                    <div className="absolute z-30 bottom-10 left-[25%] right-[25%] group-hover/overlay:block">
                        <div className="flex items-center justify-center gap-3 animate__animated animate__slideInUp animate__faster">
                            <img className="w-14 h-14 p-5 bg-white hover:bg-red-500 transition ease-in duration-200 cursor-pointer" src={facebookIcon} alt="Facebook" />
                            <img className="w-14 h-14 p-5 bg-white hover:bg-red-500 transition ease-in duration-200 cursor-pointer" src={linkedinIcon} alt="LinkedIn" />
                            <img className="w-14 h-14 p-5 bg-white hover:bg-red-500 transition ease-in duration-200 cursor-pointer" src={twitterIcon} alt="Twitter" />
                        </div>
                    </div>
                }
            </div>
            <div className="space-y-1">
                <p className="cursor-pointer hover:text-[#ff4135] transition ease-in duration-200 w-fit">{props.desc}</p>
                {props.price && (<p className="cursor-pointer hover:text-[#ff4135] transition ease-in duration-200 font-semibold w-fit">${props.price}</p>)}
                <p className="font-josefin-sans text-[24px] text-[#222] font-semibold cursor-pointer hover:text-[#ff4135] transition ease-in duration-500 text-center">{props.name}</p>
                <p className="cursor-pointer text-[#848484] hover:text-[#ff4135] transition ease-in duration-200 text-center">{props.niche}</p>
            </div>
        </div>
    );
}

export default CollectionCard
