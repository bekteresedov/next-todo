"use client";
import Item from "../item/item";
import style from "./itemList.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemList: React.FC = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/todo");
        console.log(response);

        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <main className={style.container}>
        <Item />
        <Item />
        <Item />
      </main>
    </>
  );
};

export default ItemList;
