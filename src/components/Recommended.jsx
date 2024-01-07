import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Foods from '../../public/foods.json'
import '../styles/recommended.css'
import RecSwiperBtn from './RecSwiperBtn';

const Recommended = () => {
    return (
        <div>
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
                <div className='flex justify-between items-center'>
                    <h1>Recommended</h1>
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