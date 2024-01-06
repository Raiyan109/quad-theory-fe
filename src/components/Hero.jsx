import heroImg from '../assets/Image1.png'
const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-orange-400 rounded-lg flex py-5 px-10 h-48">
                <div className='max-w-sm space-y-4'>
                    <h1 className='text-white text-4xl'>Deliver Food To Your Door Step</h1>
                    <h4 className='text-white font-thin text-xl'>Authentic Food, Quick Service, Fast Delivery</h4>
                </div>
                <div>
                    <img src={heroImg} className='w-full h-full object-contain' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;