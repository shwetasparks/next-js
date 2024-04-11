"use client";
import { useState } from "react";

import styles from "./page.module.css";

export default function Home() {
   const [name, setName] = useState("shweta");
   const [color, setColor] = useState("black");

   const handleClick = () => {
      const toggleColor = color === "black" ? "blue" : "black";
      setColor(toggleColor);
   }

   //new component
   const innerComp = () => {
      return (
        <h1>inner Comp</h1>
      )
   }

   return (
      <main className={styles.main} style={{ backgroundColor: color }}>
         <h1>my name is {name} </h1>
         <button
            onClick={() => {
               setName("div");
            }}>
            Click me
         </button>
         <button onClick={handleClick}>Change Background</button>
      <innerComp/>
      {innerComp}
      </main>
   );
}
