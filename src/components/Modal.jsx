import { useContext, useRef, useState } from "react";
import { FaX } from "react-icons/fa6";
import { Food_Context } from "../context/FoodProvider";
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";

// eslint-disable-next-line react/prop-types
const Modal = ({ setShowPopup, showPopup }) => {

    const form = useForm()
    const { register, control } = form
    const [formData, setFormData] = useState({
        Name: '',
        ImageUrl: '',
    });
    const { foods, setFoods } = useContext(Food_Context)

    const popupRef = useRef()

    const closePopup = (e) => {
        if (popupRef.current === e.target) {
            setShowPopup(!showPopup)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add validation logic here before adding to the list

        // Update the list of items with the new item from the form
        setFoods([...foods, formData]);

        // Reset the form fields after adding the item
        setFormData({
            Name: '',
            ImageUrl: '',
            // Reset other fields as required
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    return (
        <div ref={popupRef} onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
            <div className="mt-10 flex flex-col gap-5">
                <button
                    className="place-self-end bg-amber-400 text-orange-700 p-4 rounded-full"
                    onClick={() => setShowPopup(!showPopup)}><FaX /></button>
                <div className="flex justify-center items-center bg-orange-500 px-20 py-10 flex-col gap-5 mx-4 rounded-xl">
                    <h1 className="text-white text-2xl">Add New Item</h1>
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Item Name"
                            className="w-full h-12 px-4 text-black border-gray-300 rounded-md"
                            value={formData.Name}
                            // name="Name"
                            {...register("Name")}
                            id="name"
                            onChange={handleChange}
                        />
                        <input type="text"
                            placeholder="Item Image Url"
                            className="w-full h-12 px-4 text-black border-gray-300 rounded-md"
                            value={formData.ImageUrl}
                            // name="ImageUrl"
                            {...register("ImageUrl")}
                            id="imageUrl"
                            onChange={handleChange}
                        />
                        <div className="flex items-center justify-center">
                            <button type="submit" className='bg-amber-400 text-orange-700 rounded-lg text-lg font-bold md:font-normal py-1 px-7 '>
                                Add
                            </button>
                        </div>
                    </form>
                    <DevTool control={control} />
                </div>
            </div>
        </div>
    );
};

export default Modal;