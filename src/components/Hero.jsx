import heroImg from '../assets/Image1.png'
const Hero = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="bg-amber-500 rounded-lg flex py-5 px-10 h-[350px] relative w-3/4">
                <div className='max-w-sm space-y-4'>
                    <h1 className='text-white text-4xl'>Deliver Food To Your Door Step</h1>
                    <h4 className='text-white font-thin text-xl'>Authentic Food, Quick Service, Fast Delivery</h4>
                </div>
                <div className=''>
                    <img src={heroImg} className='w-[400px] h-[400px] object-contain' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;