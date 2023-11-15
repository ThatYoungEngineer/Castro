import { Link } from "react-router-dom"

function CategoryCard(props) {
    return (
        <div className="cursor-default h-fit w-fit flex items-center justify-center flex-col">
            <Link to='/products' className="cursor-default">
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="relative">
                        <img
                            className="w-60 h-60 rounded-full cursor-pointer peer/cat"
                            src={props.image}
                            alt="Category"
                        />
                        <div className="z-40 w-60 h-60 rounded-full absolute top-0 bg-[#ff4135] bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity ease-linear duration-200"
                        >
                        </div>
                    </div>
                    <p className="max-w-[100px] text-center font-josefin-sans text-[20px] text-[#222222]
                        font-semibold mt-7 hover:text-[#ff4135] cursor-pointer
                        peer-hover/cat:text-[#ff4135] transition ease-in duration-200"
                    >
                        {props.headline}
                    </p>
                </div>
            </Link> 
        </div>
    )
}
  
export default CategoryCard