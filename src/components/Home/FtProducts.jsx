import estd from '../../media/DLXESTD.jpg'
import butterfly from '../../media/butterfly.jpg'
import handofgod from '../../media/HAND OF GOD.jpg'
const FtProducts = () =>{
    return(
        <div className="bg-white pb-[50px]">
            <div className="anek text-5xl pt-[50px] flex justify-center">Featured Products</div>
            <div className="flex justify-between mt-[35px] w-[97%] mx-auto md:flex-col md:gap-4 md:items-center lg:flex-row lg:gap-0">
                <div className="border-2 w-[330px] h-[370px] flex justify-center flex-col">
                    <div className="w-[300px] h-[300px] mx-auto mt-[20px]"><img src={estd} className='-translate-y-2'/></div>
                    <div className='anek font-bold text-2xl mx-auto -translate-y-5'>DLX STANDARD</div>
                    <a href='#' className='hover:underline hover:text-slate-700 mx-auto -translate-y-3 text-lg'>View Product</a>
                </div>
                <div className="border-2 w-[330px] h-[370px] flex justify-center flex-col">
                    <div className="w-[300px] h-[300px] mx-auto mt-[20px]"><img src={handofgod} className='-translate-y-2'/></div>
                    <div className='anek font-bold text-2xl mx-auto -translate-y-5'>HANDS OF GOD</div>
                    <a href='#' className='hover:underline hover:text-slate-700 mx-auto -translate-y-3 text-lg'>View Product</a>
                </div>
                <div className="border-2 w-[330px] h-[370px] flex justify-center flex-col">
                    <div className="w-[300px] h-[300px] mx-auto mt-[20px]"><img src={butterfly} className='-translate-y-2'/></div>
                    <div className='anek font-bold text-2xl mx-auto -translate-y-5'>DLX BUTTERFLY</div>
                    <a href='#' className='hover:underline hover:text-slate-700 mx-auto -translate-y-3 text-lg'>View Product</a>
                </div>
  
            </div>
        </div>
    )
}
export default FtProducts