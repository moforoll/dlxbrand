import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
export default function GetInTouch(){
    return(
        <div className="gray w-full flex items-center flex-col gap-3 pb-[40px]">
            <div className="anek text-4xl w-[317px] pt-[45px]">Get In Touch With Us</div>
            <div className="flex gap-2 mt-1 items-center">
                <FaPhone size={18}/>
                <div className="hover:underline">+234 808 092 7673</div>
            </div>
            <div className="flex gap-2 mt-2 items-center">
                <FaInstagram size={18} className="translate-y-0.5"/>
                <div><a target="_blank" href="https://instagram.com/dlxbrand" className="hover:underline">@dlxbrand</a></div>
            </div>
            <div className="flex gap-2 mt-2 items-center">
                <MdOutlineEmail size={18} className="translate-y-0.5"/>
                <div><a target="_blank "href="mailto:deluxecollections01@gmail.com" className="hover:underline">deluxecollections01@gmail.com</a></div>
            </div>
        </div>
    )
} 