import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../styles/recommended.css'
import RecSwiperBtn from './RecSwiperBtn';
import { useContext, useState } from 'react';
import Modal from './Modal';
import { Food_Context } from '../context/FoodProvider';

const Recommended = () => {
    const [showPopup, setShowPopup] = useState(false)
    const { foods } = useContext(Food_Context)


    return (
        <div className='recContainer px-2 md:px-10 lg:px-52'>
            <Swiper
                slidesPerView={3}
                spaceBetween={7}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className='recHeader'>
                    <h1 className='font-medium'>Recommended</h1>
                </div>
                <div className='recArrow'>
                    <div>
                        <button className="text-orange-400"
                            onClick={() => setShowPopup(true)}
                        >Add More</button>
                    </div>
                    {showPopup && <Modal setShowPopup={setShowPopup} showPopup={showPopup} />}
                    <RecSwiperBtn />
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

export default Recommended;