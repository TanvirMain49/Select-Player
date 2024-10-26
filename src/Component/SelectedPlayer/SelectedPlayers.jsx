/* eslint-disable react/prop-types */

import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  playerSelections,
  handleDelete,
  handleIsActive,
}) => {
  return (
    <div>
      {playerSelections.map((player, idx) => (
        <SelectedPlayer
          key={idx}
          player={player}
          handleDelete={handleDelete}
        ></SelectedPlayer>
      ))}
      <button
        onClick={() => handleIsActive("Available")}
        className="bg-[#E7FE29] text-black hover:bg-[#E7FE29] border-[#E7FE29] font-bold btn btn-primary"
      >
        Add Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
