/* eslint-disable react/prop-types */
import Players from "../Player/Players";
import SelectedPlayers from "../SelectedPlayer/SelectedPlayers";

const CardComponent = ({players, handleIsActive, isActive, handleChoseBtn, playerSelections, handleDelete}) => {
 
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{isActive.status?`Available`:`Selected Player(${playerSelections.length}/6)`}</h1>

        <div className="space-x-3">
          <button
            onClick={() => handleIsActive("Available")}
            className={`${
              isActive.status
                ? "bg-[#E7FE29] text-black hover:bg-[#E7FE29] border-[#E7FE29] font-bold btn btn-primary"
                : "btn bg-transparent text-black font-bold hover:bg-white hover:text-black hover:scale-105"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => handleIsActive("Selected")}
            className={`${
              isActive.status
                ? "btn bg-transparent text-black font-bold hover:bg-white hover:text-black hover:scale-105"
                : "bg-[#E7FE29] text-black hover:bg-[#E7FE29] border-[#E7FE29] font-bold btn btn-primary"
            }`}
          >
            Selected({playerSelections.length})
          </button>
        </div>
      </div>
        
        {
          isActive.status?<Players players={players} handleChoseBtn={handleChoseBtn}></Players>:<SelectedPlayers playerSelections={playerSelections} handleDelete={handleDelete} handleIsActive={handleIsActive}></SelectedPlayers>
        }

    </div>
  );
};

export default CardComponent;
