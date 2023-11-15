import Separator from '../assets/images/separator-1.png'
import Insta1 from '../assets/images/instagram-1.jpg'
import Insta2 from '../assets/images/instagram-2.jpg'
import Insta3 from '../assets/images/instagram-3.jpg'
import Insta4 from '../assets/images/instagram-4.jpg'
import Insta5 from '../assets/images/instagram-5.jpg'
import Insta6 from '../assets/images/instagram-6.jpg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousal = () => {
    const settings = {
      focusOnSelect: false,
      accessibility: false,
      pauseOnFocus: true,
      draggable: true,
      rtl: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 6,
      autoplay: true,
      speed: 20000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "540px",
            speed: 7500
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "450px",
            speed: 7500
          }
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "400px",
            speed: 7500
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "350px",
            speed: 7500
          }
        },
        {
          breakpoint: 985,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "280px",
            speed: 7500
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "250px",
            speed: 7500
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "210px",
            speed: 7500
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "190px",
            speed: 7500
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "100px",
            speed: 7500
          }
        },
        {
          breakpoint: 451,
          settings: {
            slidesToShow: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            speed: 7500
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            speed: 7500
          }
        }
      ]
    };
    return (
        <section className='my-32 m-w-screen overflow-x-hidden flex items-center justify-center'>
            <div className='w-[90vw]'>
                <div className="flex flex-col items-center justify-center gap-5"> 
                    <h2 className="font-josefin-sans font-semibold text-[#222222] text-[40px] text-center leading-[40px] lg_tablet:leading-none ">Follow Us On Instagram</h2>
                    <p className="font-poppins text-[1rem] text-[#222222] text-center">Excepteur sint occaecat cupidatat</p>
                    <a href="" className='pointer-events-none mb-12'>
                      <img
                        src= {Separator}
                        alt=""
                      />
                    </a>
               </div>
                <Slider {...settings}>
                    <div>
                      <img
                        className='w-64 h-64'
                        src={Insta1}
                        alt=""
                      />
                    </div>
                    <div>
                        <img
                            className='w-64 h-64'
                            src={Insta2}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className='w-64 h-64'
                            src={Insta3}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className='w-64 h-64'
                            src={Insta4}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className='w-64 h-64'
                            src={Insta5}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className='w-64 h-64'
                            src={Insta6}
                            alt=""
                        />
                    </div>
                </Slider>
            </div>    
        </section>
    )
}

export default Carousal