import React, { use } from "react";
import Reactdom from "react-dom/client";
import { Greeting, UserCard } from "./greeting";
import Product, { Navbar } from "./Product";
const root = Reactdom.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Greeting title="Hola mundo" name="Joe"/>
    <Greeting title="Hola react" name="ryan"/>
    <Greeting title="Hola jsx"/>
    <Greeting title="Hola js"/>
    <Greeting title="Hola jhon"/>
  </div>
);
