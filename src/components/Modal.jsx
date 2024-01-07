import { useContext, useRef } from "react";
import { FaX } from "react-icons/fa6";
import { Food_Context } from "../context/FoodProvider";
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";

// eslint-disable-next-line react/prop-types
const Modal = ({ setShowPopup, showPopup }) => {

    const form = useForm()
    const { register, control, handleSubmit, formState: { errors } } = form
    // const [formData, setFormData] = useState({
    //     Name: '',
    //     ImageUrl: '',
    // });
    const { foods, setFoods } = useContext(Food_Context)

    const popupRef = useRef()

    const closePopup = (e) => {
        if (popupRef.current === e.target) {
            setShowPopup(!showPopup)
        }
    }

    const onSubmit = (data) => {
        setFoods([...foods, data]);
    }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault()

    //     setFoods([...foods, formData]);


    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value });
    //     console.log(formData);
    // }

    return (
        <div ref={popupRef} onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
            <div className="mt-10 flex flex-col gap-5">
                <button
                    className="place-self-end bg-amber-400 text-orange-700 p-4 rounded-full"
                    onClick={() => setShowPopup(!showPopup)}><FaX /></button>
                <div className="flex justify-center items-center bg-orange-500 px-20 py-10 flex-col gap-5 mx-4 rounded-xl">
                    <h1 className="text-white text-2xl">Add New Item</h1>
                    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Item Name"
                            className="w-full h-12 px-4 text-black border-gray-300 rounded-md"
                            // value={formData.Name}
                            name="Name"
                            {...register("Name", { required: true })}
                            id="Name"
                        // onChange={handleChange}
                        />
                        {errors.Name?.type === "required" && (
                            <p className="text-xs">Name is required</p>
                        )}
                        <input type="text"
                            placeholder="Item Image Url"
                            className="w-full h-12 px-4 text-black border-gray-300 rounded-md"
                            // value={formData.ImageUrl}
                            name="ImageUrl"
                            {...register("ImageUrl", { required: "Image Url is required" })}
                            id="ImageUrl"
                        // onChange={handleChange}
                        />
                        {errors.ImageUrl && <p className="text-xs">{errors.ImageUrl.message}</p>}
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