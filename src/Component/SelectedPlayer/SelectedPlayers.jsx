/* eslint-disable react/prop-types */

import SelectedPlayer from "./SelectedPlayer";


const SelectedPlayers = ({ playerSelections, handleDelete }) => {
  console.log(playerSelections);
  return (
    <div>
      {playerSelections.map((player, idx) => (
        <SelectedPlayer
          key={idx}
          player={player}
          handleDelete={handleDelete}
        ></SelectedPlayer>
      ))}
      <button className="bg-[#E7FE29] text-black hover:bg-[#E7FE29] border-[#E7FE29] font-bold btn btn-primary">
        Add Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
