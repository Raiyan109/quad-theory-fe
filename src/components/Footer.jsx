import footerImg from '../assets/Image2.png'
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import '../styles/footer.css'


const Footer = () => {
    return (
        <div className="bg-amber-500 w-full p-10 flex justify-around items-center gap-20 absolute bottom-0">
            <div className='flex flex-col gap-20'>
                <div>
                    <div className="flex items-center bg-white pl-2 h-9 rounded-xl">
                        <input type="text"
                            className="inputText placeholder:text-gray-300"
                            placeholder="Enter your Email"
                        />
                        <div className='bg-orange-500 text-white rounded-lg text-sm py-1 pl-7 pr-4 mr-2 flex items-center gap-1'>
                            <button className=''>Subscribe</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <div>
                        <h1 className='text-xl font-bold'>pti<span className='font-bold text-orange-500 text-4xl'>.</span></h1>
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
                <img src={footerImg} alt="" className='w-64 h-64 object-contain' />
            </div>
        </div>
    );
};

export default Footer;