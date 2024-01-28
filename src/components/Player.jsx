import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName,setEnteredlayerName] = useState(null);

  function handleClick(){
    setEnteredlayerName (playerName.current.value);
    playerName.current.value = ''; // imperative way, used only in case no other state or value is connected to this
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
