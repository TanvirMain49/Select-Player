import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import CardComponent from "./Component/CardComponent/CardComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./Component/Newsletter/Newsletter";
import Footer from "./Component/Footer/Footer";

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
    toast.success("Money added successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [playerSelections, setPlayerSelections] = useState([]);
  const handleChoseBtn = (player) => {
    if (Number(amount) < player.price) {
      toast.warn("Not enough money", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const boolCheek = playerSelections.find(
      (playerId) => playerId.id === player.id
    );
    if (boolCheek) {
      toast.error("Player is already added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (playerSelections.length < 6) {
      const addPlayer = [...playerSelections, player];
      setPlayerSelections(addPlayer);
      toast.success("Player added successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setAmount(amount - player.price);
    } else {
      toast.error("You can add max six player", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const newPlayer = playerSelections.filter((player) => player.id !== id);
    setPlayerSelections(newPlayer);
    toast.error("Player deleted successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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

      <div className="relative">
        <div className="absolute z-10 top-16 left-96 bg-white rounded-2xl">
          <Newsletter></Newsletter>
        </div>
      </div>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;


