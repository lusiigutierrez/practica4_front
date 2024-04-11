import { useState } from "preact/hooks";
import HiButton from "./HiButton.tsx";
import Shower from "../components/Shower.tsx";

const Mostrar = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [mostrarname, setmostrarName] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Nombre:", name);
    console.log("Apellido:", apellido);
    setmostrarName(true); 

  };

  return (
    <div class="formBody">
      <form class="formBox" onSubmit={handleSubmit}>
        <h3>Say hi hi hi</h3>
        <input
          type="text"
          name="nombre"
          placeholder="Name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <br />
        <input
          type="text"
          name="apellido"
          placeholder="Last name"
          value={apellido}
          onInput={(e) => setApellido(e.currentTarget.value)}
        />
        <br />
     
        <button type="submit">
          Hi!
        </button>
        {mostrarname &&  name  }
      </form>
    </div>
  );
};

export default Mostrar;
