export default function Newsletter(){
    return(
        <div className="w-full bg-white">
            <div className="text-3xl flex justify-center anek pt-[30px]">Subscribe to our Newsletter</div>
            <div className="w-[97%] flex justify-between items-center mx-auto mt-[15px] pb-[30px]">
                <input type="text" placeholder="Email" className="w-[90%] h-[30px] outline"/>
                <button className="bg-black text-white p-2 pt-3 hover:text-black border-2 border-white anek hover:bg-white hover:border-black delay-75 transition ease-in-out duration-[350ms]">Subscribe</button>
            </div>
        </div>
    )
}