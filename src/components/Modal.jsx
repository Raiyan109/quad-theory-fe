import { useRef } from "react";
import { FaX } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Modal = ({ setShowPopup, showPopup }) => {

    const popupRef = useRef()

    const closePopup = (e) => {
        if (popupRef.current === e.target) {
            setShowPopup(!showPopup)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div ref={popupRef} onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5">
                <button
                    className="place-self-end bg-amber-400 text-orange-700 p-4 rounded-full"
                    onClick={() => setShowPopup(!showPopup)}><FaX /></button>
                <div className="flex justify-center items-center bg-orange-500 px-20 py-10 flex-col gap-5 mx-4 rounded-xl">
                    <h1 className="text-white text-2xl">Add New Item</h1>
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="Item Name"
                            className="w-full h-12 px-4 text-black border-gray-300 rounded-md"
                        />
                        <input type="text"
                            placeholder="Item Image Url"
                            className="w-full h-12 px-4 text-black border-gray-300 rounded-md"
                        />
                        <div className="flex items-center justify-center">
                            <button type="submit" className='bg-amber-400 text-orange-700 rounded-lg text-lg font-bold md:font-normal py-1 px-7 '>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;