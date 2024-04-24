import React, { useState } from 'react'
import backgroundBanner from '../../assets/images/product-bg-cover.jpg'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import SearchIcon from '@mui/icons-material/Search'
import CollectionCard from '../../Components/CollectionCard'
import { useSelector } from 'react-redux'

import productsData from './productsData'

const Products = () => {
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    const products = productsData
    const productsPerPage = 8

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setPage(1)
    };

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo(0, 200);
    }    

    return (
        <div>
            <div
                id='bg_banner'
                className="flex flex-col items-center justify-center py-20 px-0 "
                style={{ backgroundImage: `url(${backgroundBanner})` }}
            >
                <h2 className="font-josefin-sans font-semibold text-[46px] text-[#222]">Products</h2>
                <div className="flex gap-2">
                    <p className="font-poppins font-normal text-[15px] text-[#848484] cursor-pointer hover:text-[#ff4135] transition duration-500 ease-linear">
                        Home
                    </p>
                    <span className="flex items-center justify-center gap-2 font-poppins font-normal text-[15px] text-[#848484]">
                        <ArrowForwardIosOutlinedIcon style={{ fontSize: '10px', fontWeight: 'bold' }} />
                        products
                    </span>
                </div>
            </div>
            <section className="my-10 sm_desktop:my-28 flex flex-col items-center justify-center gap-5 sm_desktop:gap-16 px-0 sm_mobile:px-5 sm_tablet:px-16 sm_desktop:px-10 md_desktop:px-20 xm_desktop:px-36 lg_desktop:px-80">
                <header className="w-full flex items-center justify-center sm_desktop:justify-between flex-wrap gap-5">
                    <section className="flex gap-5 text-[#848484] font-poppins  font-normal">
                        <div className="Products__subHeading">
                            Currently Showing{' '}
                            <h3 className="text-[1rem] self-center font-medium text-[#031C3A]">
                                ({displayedProducts.length})
                            </h3>
                            of
                            <h3 className="text-[1rem] self-center font-medium text-[#031C3A]">
                                ({filteredProducts.length})
                            </h3>{' '}
                        </div>
                    </section>
                    <section className="relative">
                        <input
                            type="text"
                            className="cursor-pointer w-full outline-none text-[1rem] font-poppins font-light"
                            id="productsSearchBar"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <SearchIcon id="searchIcon" />
                    </section>
                </header>
                <div className="w-full flex items-center justify-center gap-10 lg_tablet:gap-0 lg_tablet:justify-between flex-wrap md_tablet:gap-10 sm_desktop:gap-5">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="mb-10">
                            <CollectionCard
                                productId = {product.id}
                                image={product.img}
                                desc={product.name}
                                price={product.price}
                                product={true && product}
                            />
                        </div>
                    ))}
                </div>
                {(displayedProducts.length === 0 && filteredProducts.length === 0) && (
                    <section className="font-poppins flex flex-col gap-7 items-center justify-center animate__animated animate__slideInLeft">
                        <h2 className="font-medium text-center text-4xl text-[#383535]">
                            No Search Results Found!
                        </h2>
                        <p className="text-[#031C3A]">Try searching a different product</p>
                    </section>
                )}
                <div className="w-full flex items-center justify-center my-0">
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPages}
                            size="large"
                            color="secondary"
                            onChange={handlePageChange}
                            page={page}
                        />
                    </Stack>
                </div>
            </section>
        </div>
    );
};

export default Products;
