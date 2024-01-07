import footerImg from '../assets/Image2.png'
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import '../styles/footer.css'


const Footer = () => {
    return (
        <div className="bg-amber-500 w-full p-10 flex justify-evenly items-center gap-10  bottom-0">
            <div className='flex flex-col flex-wrap gap-10 md:gap-24'>
                <div>
                    <div className="flex items-center bg-white pl-2 h-16 md:h-9 rounded-xl">
                        <input type="text"
                            className="inputText placeholder:text-gray-300"
                            placeholder="Enter your Email"
                        />
                        <div className='bg-transparent md:bg-orange-500 text-orange-400 md:text-white rounded-xl text-md md:text-sm font-bold md:font-normal py-1 pl-7 pr-4 mr-2 flex items-center gap-1'>
                            <button className=''>Subscribe</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5 md:gap-48 flex-col-reverse md:flex-row'>
                    <div className='flex flex-col justify-center items-center md:items-start gap-5 md:gap-1'>
                        <h1 className='text-3xl md:text-2xl font-bold'>pti<span className='font-bold text-orange-500 text-4xl'>.</span></h1>
                        <h2 className='text-md md:text-sm font-bold'>Copyright@Tripp.All Right Reserved</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-9 h-9 rounded-full flex justify-center items-center bg-orange-500 md:bg-orange-200 text-orange-200 md:text-orange-500'>
                            <FaGoogle />
                        </div>
                        <div className='w-9 h-9 rounded-full flex justify-center items-center bg-orange-500 md:bg-orange-200 text-orange-200 md:text-orange-500'>
                            <FaTwitter />
                        </div>
                        <div className='w-9 h-9 rounded-full flex justify-center items-center bg-orange-500 md:bg-orange-200 text-orange-200 md:text-orange-500'>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <img src={footerImg} alt="" className='w-[300px] h-[300px] object-contain' />
            </div>
        </div>
    );
};

export default Footer;