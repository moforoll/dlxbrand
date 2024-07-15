import '../../App.css';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <div>
        <div className="flex  justify-center h-[72px] anek text-lg">
            <div className="w-11/12 flex items-center h-full border-white border-b-[1px] px-[10px]">
            <div className="flex justify-between w-full">
                <div className="font-semibold text-4xl minecraft -translate-y-[2px] text-white">
                    <div>DLX</div>
                   
                </div>
                <div className="flex justify-between w-[350px] translate-y-2 text-white text-[17px] translate-x-5">
                    <div className='hover:scale-[1.21] delay-50 transition ease-in-out duration-200 cursor-default'>Home</div>
                    <div className='hover:scale-[1.21] delay-50 transition ease-in-out duration-200 cursor-default'><Link to="shop">Shop</Link></div>
                    <div className='hover:scale-[1.21] delay-50 transition ease-in-out duration-200 cursor-default'>About us</div>
                    <div className='hover:scale-[1.21] delay-50 transition ease-in-out duration-200 cursor-default'>Contact</div>
                    <div></div>
                </div>
                <div className="flex justify-between w-[80px] translate-y-1 text-white text-base">
                    <HiOutlineShoppingCart size={24} className='hover:scale-[1.21] delay-50 transition ease-in-out duration-200'/>
                    <IoPersonOutline size={22} className='translate-y-[2px] hover:scale-[1.21] delay-50 transition ease-in-out duration-200'/>
                </div>
                </div>
            </div>
            
        </div>
        </div>
    )
} 

export default Nav