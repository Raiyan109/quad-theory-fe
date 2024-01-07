import heroImg from '../assets/Image1.png'
const Hero = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className='max-w-sm space-y-4 block md:hidden mb-16'>
                <h1 className='text-slate-700 text-4xl text-center'>Deliver Food To Your Door Step</h1>
                <h4 className='text-slate-400 font-thin text-lg text-center'>Authentic Food, Quick Service, Fast Delivery</h4>
            </div>
            <div className="bg-orange-400 md:bg-amber-500 rounded-3xl flex py-5 px-10 h-48 md:h-[350px] relative w-3/4">
                <div className='max-w-md space-y-4 hidden md:flex flex-col justify-center p-7 '>
                    <h1 className='text-white md:text-2xl lg:text-4xl'>Deliver Food To Your Door Step</h1>
                    <h4 className='text-white opacity-60 font-thin text-sm lg:text-lg'>Authentic Food, Quick Service, Fast Delivery</h4>
                </div>
                <div className='absolute -bottom-[74px] left-0 md:-bottom-20 lg:-bottom-16 md:left-[400px] lg:left-[800px] '>
                    <img src={heroImg} className='w-[400px] h-[400px] object-contain' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;