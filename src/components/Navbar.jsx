import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <div className="flex justify-center space-x-10 lg:space-x-32 items-center  px-5 py-8">
            <h1 className="font-bold text-xl">pti.</h1>
            <div className="flex">
                <div className="flex items-center bg-white px-2 h-8 rounded-md">
                    <CiSearch className="text-orange-600" />
                    <input type="text"
                        className="textInput w-48 md:w-80 "
                        placeholder="Search Audiobook"
                    />
                </div>
                <div>
                    <select
                        name="sort"
                        className="select"
                    >
                        <option value="home">Home</option>
                        <option value="details">Details</option>
                        <option value="category">Category</option>
                        <option value="myFavorites">My Favorites</option>
                        <option value="profile">Profile</option>
                        <option value="login/sign up">Log in/Sign Up</option>
                    </select>
                </div>
            </div>
            <div className="bg-orange-600 text-white w-9 h-9   rounded-full  md:flex justify-center items-center hidden">
                <GoPerson />
            </div>
        </div>
    );
};

export default Navbar;