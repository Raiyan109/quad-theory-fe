import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from 'swiper/react';
import '../styles/recSwiperBtn.css'

const RecSwiperBtn = () => {
    const swiper = useSwiper();
    return (
        <div className='recButtonContainer'>
            <button className='recBtn1' onClick={() => swiper.slidePrev()}>
                <IoIosArrowBack />
            </button>
            <button className='recBtn2' onClick={() => swiper.slideNext()}>
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default RecSwiperBtn;