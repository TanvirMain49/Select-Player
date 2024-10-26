/* eslint-disable react/prop-types */
import Player from "./Player";

const Players = ({ players, handleChoseBtn }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-12 py-12">
        {players.map((player, idx) => (
          <Player
            key={idx}
            player={player}
            handleChoseBtn={handleChoseBtn}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
