import React, { useState, useEffect, useTransition } from "react";
import Reactdom from "react-dom/client";
import { Greeting, UserCard } from "./greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Tasks";
import { Post } from "./Posts";

const root = Reactdom.createRoot(document.getElementById("root"));

const handleChange = (event) => {
  console.log(event.target.value);
};

function Counter() {
  const [mensaje, setMensaje] = useState(""); // el primer parametro es una variable, el segundo es una funcion que actualizara la variable
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [count]);

  return (
    /*  <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>

      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </> */
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es: ${mensaje}`);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

/* 
const users = [
  {
    id: 1,
    name: "Ryan",
    image: "https://robohash.org/2001:4860:7:70f::.png",
  },
  {
    id: 2,
    name: "Roy",
    image: "https://robohash.org/4",
  },
  {
    id: 3,
    name: "noe",
    image: "https://robohash.org/3",
  },
]; */

root.render(
  // Prop usercard
  <>
    {/* <UserCard
      name="jhon"
      amount={5400}
      married={true}
      points={[43, 21, 56, 64]}
      address={{
        pais: "Venezuela",
        estado: "Zulia",
      }}
      greet={function(){
        alert('hello')
      }}
    />
    <UserCard 
      name="dia"
      married={false}
      points={[100, 20]}
      address={{
        pais: "Colombia",
        estado: "Bogota"
      }}
      /> */}

    {/* <Button text="tocame" />
    <Button text="Click me" />
    <Button text="sopa" name="see" /> */}

    {/* <TaskCard ready={true} />
    <Button text="You" />

    <input id="hola" onChange={handleChange} />

    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("Enviado");
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form> */}
    {/* <Post/> */}

    {/* {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })} */}
    <Counter />
  </>
);
