/* eslint-disable react/prop-types */
import { CgProfile } from "react-icons/cg";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({ player, handleChoseBtn }) => {

  const { imageUrl, name, country, battingStyle, rating, price, role,} =
    player;

  return (
    <div>
      <div className="border space-y-5 p-6 rounded-xl">
        <img src={imageUrl} alt="" className="max-h-96 w-full rounded-2xl " />

        <div className="space-y-1">
          {/* Name */}
          <div className="flex items-center gap-2">
            <CgProfile className="text-3xl font-bold"></CgProfile>
            <h2 className="text-xl font-bold">{name}</h2>
          </div>

          {/* country and role */}
          <div className="flex justify-between items-center pb-2 border-b-2">
            <div className="flex items-center gap-2">
              <IoFlagSharp className="text-xl font-bold"></IoFlagSharp>
              <h2 className="text-base text-gray-400">{country}</h2>
            </div>

            <button className="border-2 p-2 rounded-xl font-bold bg-gray-50">
              {role}
            </button>
          </div>

          {/* ratting */}
          <div className="flex items-center justify-between py-2">
            <h2 className="font-bold">Ratting</h2>
            <button className={`border-2 p-2 rounded-xl font-bold bg-gray-50`}>
              {rating}
            </button>
          </div>

          {/* playing style */}
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Playing Style</h2>
            <button className="border-2 p-2 rounded-xl font-bold bg-gray-50">
              {battingStyle}
            </button>
          </div>

          {/* price and choose player */}
          <div className="flex items-center justify-between py-3">
            <h2 className="font-bold">Price: ${price}</h2>
            <button
              onClick={() => handleChoseBtn(player) }
              className="border-2 p-2 rounded-xl bg-[#E7FE29] font-bold hover:scale-105 hover:transition-all ease-out duration-300"
            >
              Chose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
