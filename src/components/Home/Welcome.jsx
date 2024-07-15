const Welcome = () =>{
    return(
        <div className="text-white anek w-full flex flex-col justify-center items-center h-[calc(100vh-72px)] gap-y-4">
            <div className="anek text-6xl font-semibold">Welcome to Deluxe</div>
            <div className="text-lg">The fusion of minimalistic clothing and urban fashion.</div>
            <a href="shop"><button className="bg-white text-black p-3 hover:text-white border-2 hover:bg-black hover:border-white delay-75 transition ease-in-out duration-[350ms]">Shop Now</button></a>
        </div>
    )
    
}
export default Welcome  