/* eslint-disable react/prop-types */
import { MdOutlineDeleteForever } from "react-icons/md";
const SelectedPlayer = ({ player, handleDelete }) => {
  console.log(player);
  const { imageUrl, name, role } = player;
  return (
    <div>
      <div className="py-4">
        <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div>
              <img
                src={imageUrl}
                alt=""
                className="w-12 h-12 rounded-full object-center"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <h3 className="font-extralight text-gray-500">{role}</h3>
            </div>
          </div>
          <div className="btn border-red-500 hover:bg-red-500  hover:scale-105 hover:transition-colors all ease-in-out duration-300 hover:text-white">
            <MdOutlineDeleteForever
              onClick={() => handleDelete(player.id)}
              className="text-3xl text-red-500 hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
