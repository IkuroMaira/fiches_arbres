import {useEffect, useState} from 'react'
import './App.css'

function App() {
    // Variable pour stocker la commande
    const [command, setCommand] = useState();

    // Fetch de la commande depuis de server
    async function loadCommand() {
        const response = await fetch("http://localhost:3000/command/1")
        setCommand(await response.json());
        // setCommand({id: 1, name: "burger", price: 8});
    }

    // Une fonction qui est appelée au chargement de l'App
    useEffect(() => {
        loadCommand();
    }, []);

    if (command === undefined) {
        return <div>Loading...</div>
    }

  return (
    <>
      <div className="command">
          <span className="command">{command.name}</span>
          <span className="title">{command.price}€</span>
      </div>
    </>
  )
}

export default App
