import { useContext, useState } from 'react';
import Modal from './Modal';
import { Food_Context } from '../context/FoodProvider';
import '../styles/popular.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import PopularSwiperBtn from './PopularSwiperBtn';


const Popular = () => {
    const [showPopup, setShowPopup] = useState(false)
    const { foods } = useContext(Food_Context)
    return (
        <div className="popularContainer px-12 md:px-10 lg:px-52">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className='popularHeader'>
                    <h1 className='font-medium'>Popular</h1>
                </div>
                <div className='popularArrow'>
                    <div>
                        <button className="text-orange-400"
                            onClick={() => setShowPopup(true)}
                        >Add More</button>
                    </div>
                    {showPopup && <Modal setShowPopup={setShowPopup} showPopup={showPopup} />}
                    <PopularSwiperBtn />
                </div>
                {foods.map((food) => (
                    <SwiperSlide key={food.Id}>
                        <img src={food.ImageUrl} alt="" />
                        <h5 className='text-center text-gray-500'>{food.Name}</h5>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Popular;