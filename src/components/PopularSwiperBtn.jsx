import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from 'swiper/react';
import '../styles/popularSwiperBtn.css'


const PopularSwiperBtn = () => {
    const swiper = useSwiper();
    return (
        <div className='popularButtonContainer'>
            <button className='popularBtn1' onClick={() => swiper.slidePrev()}>
                <IoIosArrowBack />
            </button>
            <button className='popularBtn2' onClick={() => swiper.slideNext()}>
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default PopularSwiperBtn;