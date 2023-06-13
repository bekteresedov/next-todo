import React from "react";
import style from "./item.module.css";

const Item: React.FC = () => {
  return (
    <>
      <main className={style.main}>
        <h2 className="message">Alma</h2>
        <div className={style.button}>
          <button className="update">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </main>
    </>
  );
};

export default Item;
