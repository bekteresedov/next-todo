"use client";
import React, { useState } from "react";
import style from "./addItem.module.css";
import axios from "axios";
const AddItem: React.FC = () => {
  const [text, setText] = useState<String>();
  const onChangeText = (input: String): void => {
    setText(input);
  };

  const handleButtonClick = (): void => {
    axios.post(`http://localhost:3000/api/todo`, { message: text });
  };
  return (
    <>
      <main className={style.container}>
        <input onChange={(e) => onChangeText(e.target.value)} type="text" />
        <button onClick={() => handleButtonClick()}>Add</button>
      </main>
    </>
  );
};

export default AddItem;
