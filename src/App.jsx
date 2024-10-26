import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import CardComponent from "./Component/CardComponent/CardComponent";

function App() {
  // fetch data
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  const [isActive, setActive] = useState({
    status: true,
    isActive: "Available",
  });

  const handleIsActive = (status) => {
    if (status == "Available") {
      setActive({
        status: true,
        isActive: "Available",
      });
    } else {
      setActive({
        status: false,
        isActive: "Selected",
      });
    }
  };

  const [amount, setAmount] = useState(0);
  const handleCredit = (addAmount) => {
    let newAmount = amount + addAmount;
    setAmount(newAmount);
    alert("money added");
  };

  const [playerSelections, setPlayerSelections] = useState([]);
  const handleChoseBtn = (player) => {
    if (Number(amount) < player.price) {
      alert("Not enough money");
      return;
    }

    const boolCheek = playerSelections.find(
      (playerId) => playerId.id === player.id
    );
    if (boolCheek) {
      alert("Player is already added");
      return;
    }

    if (playerSelections.length < 6) {
      const addPlayer = [...playerSelections, player];
      setPlayerSelections(addPlayer);
      alert("Player Added");
      setAmount(amount - player.price)
    } else {
      alert("You can add only 6 player");
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const newPlayer = playerSelections.filter((player) => player.id !== id);
    setPlayerSelections(newPlayer);
  };

  return (
    <>
      <header className="w-11/12 mx-auto">
        <Navbar amount={amount}></Navbar>
        <Banner handleCredit={handleCredit}></Banner>
      </header>

      <main className="w-11/12 mx-auto py-12">
        <CardComponent
          players={players}
          isActive={isActive}
          handleIsActive={handleIsActive}
          handleChoseBtn={handleChoseBtn}
          playerSelections={playerSelections}
          handleDelete={handleDelete}
        ></CardComponent>
      </main>
    </>
  );
}

export default App;

//        <div>
// {
//   selectPlayers.map((player,idx)=> <SelectedPlayer key={idx} player={player}></SelectedPlayer>)
// }
// </div>
