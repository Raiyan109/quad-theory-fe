import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Foods from '../../public/foods.json'
import '../styles/recommended.css'
import RecSwiperBtn from './RecSwiperBtn';
import { useState } from 'react';
import Modal from './Modal';

const Recommended = () => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className='recContainer py-10 px-12 md:px-10 lg:px-32'>
            <Swiper
                slidesPerView={1}
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
                <div className='recHeader'>
                    <h1>Recommended</h1>
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
                {Foods.map((food) => (
                    <SwiperSlide key={food.id}>
                        <img src={food.image} alt="" />
                        <h5 className='text-center text-gray-500'>{food.name}</h5>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Recommended;