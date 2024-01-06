import footerImg from '../assets/Image2.png'
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-orange-500 w-full p-10 flex justify-center items-center absolute bottom-0">
            <div>
                <div>
                    <div className="flex items-center bg-white px-2 h-8 rounded-md">
                        <input type="text"
                            className=""
                            placeholder="Enter your Email"
                        />
                        <div className='bg-orange-600 text-white rounded-md text-sm py-1 px-2 flex items-center gap-1'>
                            <button className=''>Subscribe</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-xl font-bold'>pti <span className='font-bold text-orange-500'>.</span></h1>
                        <h2 className='text-sm font-medium'>Copyright@Tripp.All Right Reserved</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-8 h-8 rounded-full flex justify-center items-center bg-orange-200 text-orange-500'>
                            <FaGoogle />
                        </div>
                        <div className='w-8 h-8 rounded-full flex justify-center items-center bg-orange-200 text-orange-500'>
                            <FaTwitter />
                        </div>
                        <div className='w-8 h-8 rounded-full flex justify-center items-center bg-orange-200 text-orange-500'>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={footerImg} alt="" className='w-56 h-56 object-contain' />
            </div>
        </div>
    );
};

export default Footer;