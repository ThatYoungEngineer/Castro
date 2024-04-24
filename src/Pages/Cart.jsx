import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ClearIcon from '@mui/icons-material/Clear'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import {
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity
} from '../slice/cartSlice'

import CartGIF from '../assets/images/cartGIF.gif'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Cart = () => {

    const {cartItems, totalQuantity, totalPrice} = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cartItems])
    const location = useLocation();

    const handleClick = () => {

        Swal.fire({
            title: '<span style="font-family: poppins; font-size: 30px; color: #333;">Order Confirmed!</span>',
            html: '<span style="font-family: poppins; font-size: 16px; color: #666;">Your order id is: 9F8004-8Q</span>',
            icon: 'success'
        })
    }
    return (
        <>
            <h2
                className='py-20 w-full relative font-sans font-bold text-[#222] text-4xl text-center cart-bg'
            >
                Your Shopping
                <span className='text-[#ff3415]'>Cart</span>
            </h2>

            {cartItems.length === 0 ? (
                <div className='w-full flex flex-col items-center  gap-5 font-poppins text-[#808080] text-2xl min-h-[50vh]'>
                    <img src={CartGIF} alt="cartGIF" className='mt-5 pointer-events-none' />
                    <h2 className='text-5xl font-bold text-[#202020] mt-5'>WHOOPS<span className='text-[#ff4135]'>!</span> </h2>
                    <span className='font-jomolhari text-xl'>Your cart is currently empty!</span>
                    <Link to='/products' className='mb-5 px-5 py-3 bg-[#ff4135] text-white text-xl font-normal hover:font-medium rounded-full hover:bg-opacity-80 transition ease-linear duration-100'>Shop Now</Link>
                </div>
            ) : (
                <section className='w-full border-y py-5 lg_mobile:py-20 sm_mobile:px-5 md_tablet:px-14 lg_tablet:px-5 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80 flex flex-col gap-5 items-center justify-center cart-bg'>
                    <p className='font-sans italic xl_mobile:hidden'>(This cart contains horizontal scroll)</p>
                    <TableContainer component={Paper} style={{boxShadow: '2px 2px 25px 2px rgba(0, 0, 0, 0.2)', borderRadius: '10px'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell > <h2  className='font-poppins font-normal text-start text-[12px] whitespace-normal w-[1%] md_tablet:text-[20px] md_tablet:'> Description </h2> </TableCell>
                                <TableCell > <h2  className='font-poppins font-normal text-start text-[12px] whitespace-normal w-[1%] md_tablet:text-[20px] md_tablet:ml-[10%]'> Quantity </h2> </TableCell>
                                <TableCell > <h2  className='font-poppins font-normal text-center text-[12px] whitespace-normal w-[1%] md_tablet:text-[20px] md_tablet:ml-[5%]'> Price </h2> </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody >
                                {cartItems?.map(cartItem => (
                                    <TableRow key={cartItem.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell >
                                            <span className='flex gap-2 sm_desktop:gap-5 w-fit'>
                                                <div className='w-[60px] h-[80px] md_tablet:w-[80px] md_tablet:h-[100px] overflow-hidden flex-1 flex items-center justify-center'>
                                                    <img className='w-[60px] h-[80px] md_tablet:w-[80px] md_tablet:h-[100px] hover:scale-[1.1] transition ease-linear duration-200' src={cartItem.img} alt={cartItem.name} />
                                                </div>
                                                <span className='flex-1 flex flex-col gap-3 sm_desktop:gap-5 justify-center font-poppins text-xs text-[#222] leading-snug'>
                                                    <h3 className='w-20 text-[10px] md_tablet:w-56 md_tablet:text-[17px]  font-semibold'> {cartItem.name} </h3>
                                                    <div className='space-y-1'>
                                                        <p className='text-[8px] md_tablet:text-[13px] break-normal'> <i> Size: </i>{cartItem.size ? cartItem.size : 'M'} </p>
                                                        <p className='text-[8px] md_tablet:text-[13px] break-normal'> <i> Color: </i>{cartItem.color ? cartItem.color : 'Blue'}</p>
                                                    </div>
                                                </span>
                                            </span>    
                                        </TableCell>
                                        <TableCell>
                                            <span className='w-fit flex items-center justify-center gap-3 px-4 lg_mobile:px-3 md_tablet:px-0'>
                                                <div className='w-fit flex flex-col md_tablet:flex-row gap-3 items-center justify-center border border-[#e6e6e6]'>
                                                    <span className='cursor-pointer bg-[#031C3A] lg_mobile:py-[2px] md_tablet:p-2' onClick={() => dispatch(increaseItemQuantity(cartItem.id))}>
                                                        <AddIcon
                                                            className='text-white p-1 text-[30px]'
                                                            style={{ fontSize: '1.5rem' }}
                                                        />
                                                    </span>
                                                    <input
                                                        type="number"
                                                        min='1'
                                                        value={cartItem.quantity}
                                                        className="w-3 sm_tablet:w-5 sm_desktop:w-10 xm_desktop:w-16 text-center outline-none font-poppins text-[16px] sm_desktop:text-[20px] font-medium md_tablet:font-semibold text-[#222]"
                                                    />
                                                    <span className='cursor-pointer bg-[#F5F5F5] lg_mobile:py-[2px]  md_tablet:p-2' onClick={() => dispatch(decreaseItemQuantity(cartItem.id))}>
                                                        <RemoveIcon
                                                            className='text-[#848484] p-1'
                                                            style={{ fontSize: '1.5rem' }}
                                                        />                                                    
                                                    </span>
                                                </div>
                                                <span className='w-full flex items-center justify-center' title='Remove Item'>
                                                    <ClearIcon
                                                        className='bg-white text-[#222] cursor-pointer border-2 p-1 hover:bg-[#DC143C] hover:border-[#DC143C] hover:text-white'
                                                        style={{fontSize: '25px', transition: '0.3s ease-in-out'}} 
                                                        onClick={() => dispatch(removeItem(cartItem.id)) }
                                                    /> 
                                                </span>
                                            </span>
                                        </TableCell>
                                        <TableCell> <h3 className='font-medium text-sm font-poppins text-[#222] sm_desktop:w-20 bg-red-300 sm_desktop:text-[20px]' title='Single item price'> {`$${(cartItem.quantity * cartItem.price).toFixed(2)}`} </h3> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
            )}
            <footer className='my-10 sm_mobile:px-5 lg_tablet:px-5 sm_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80  flex flex-col gap-10'>
                <div className='flex gap-5 flex-wrap'>
                    <div className='py-8 px-4 border flex justify-between flex-1  gap-2  font-poppins text-lg '>
                        <h3>Discount</h3>
                        <h3 className='font-semibold'>$0.00</h3>
                    </div>
                    <div className='py-8 px-4 border flex justify-between flex-1  gap-2 font-poppins text-lg '>
                        <h3>Delivery</h3>
                        <h3 className='font-semibold'>$0.00</h3>
                    </div>
                    <div className='py-8 px-4 border flex justify-between flex-1  gap-2 font-poppins text-lg '>
                        <h3>Subtotal </h3>
                        <h3 className='font-semibold'>$0.00 </h3>
                    </div>
                    <div className='py-8 px-4 border flex justify-between flex-1  gap-2 font-poppins text-lg '>
                        <h3>Total</h3>
                        <h3 className='font-semibold'>
                            {totalPrice === null ? '$0.00' : `$${totalPrice.toFixed(2)}`}
                        </h3>
                    </div>
                </div>
                <h4 className='lg_tablet:pl-5 font-poppins text-gray-500 '>If you have a promotion code, please enter it here: </h4>
                <div className='w-full flex flex-wrap gap-10 lg_tablet:gap-[5%]'>
                    <div className='w-full lg_tablet:w-[75%] h-fit flex flex-wrap gap-3 lg_tablet:gap-0'>
                        <input
                            type="text"
                            className='w-full lg_tablet:w-[70%] border p-3 outline-cyan-700 font-poppins font-normal'
                            placeholder='Please enter promo code'
                        />
                        <Button variant="contained" style={{backgroundColor: '#031C3A'}} className='lg_tablet:w-[30%] w-fit'>
                            <span className='capitalize w-full text-left font-poppins font-medium py-2 px-4'>Apply Discount</span> 
                        </Button>
                    </div>
                    <div className='w-full lg_tablet:w-[20%] flex flex-col gap-5'>
                        <Button variant="contained" style={{backgroundColor: '#031C3A'}} className='w-full' onClick={handleClick}>
                            <span className='capitalize w-full text-left font-poppins font-medium py-2 px-4 flex justify-between'>Checkout <ShoppingBasketIcon className='text-white' /> </span> 
                        </Button>
                        <Link to='/products'>
                            <Button variant="contained" style={{backgroundColor: '#F5F5F5'}} className='w-full'>
                                <span className='capitalize w-full text-left text-black font-poppins font-medium py-2 px-4'>Continue Shopping</span> 
                            </Button>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Cart
