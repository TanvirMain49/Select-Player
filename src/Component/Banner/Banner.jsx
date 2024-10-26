/* eslint-disable react/prop-types */
import './Banner.css'
const Banner = ({handleCredit}) => {
    return (
        <div>
            <div className="bg-img p-20 flex flex-col justify-center items-center space-y-7">
                <img src="../../../public/assets/banner-main.png" alt="" />
                <h2 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-500 text-xl font-semibold'>Beyond Boundaries Beyond Limits</p>
                <button onClick={()=>handleCredit(1500000)} className='btn btn-primary bg-[#E7FE29] text-black hover:bg-[#E7FE29] border-[#E7FE29] font-bold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;