/* eslint-disable react/prop-types */
import { RiCoinsLine } from "react-icons/ri";
const Navbar = ({amount}) => {

    return (
        <div className="flex justify-between items-center py-6">
            {/* img section start*/}
            <div>
                <img src="../../../public/assets/logo.png" alt="" />
            </div>
            {/* img section end */}

            {/* nav option section start */}
            <div className="flex items-center gap-6">
                <a href="#" className="text-[#131313B3]">Home</a>
                <a href="#" className="text-[#131313B3]">Fixture</a>
                <a href="#" className="text-[#131313B3]">Teams</a>
                <a href="#" className="text-[#131313B3]">Schedules</a>
                <button className="flex items-center btn border-2 border-gray-300 bg-white hover:bg-white">
                    {amount} coins <RiCoinsLine className="text-2xl text-yellow-500"/>
                </button>
            </div>
            {/* nav option section end */}
            
        </div>
    );
};

export default Navbar;