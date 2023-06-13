import AddItem from "../components/addItem/addItem";
import ItemList from "../components/itemList/itemList";
import Head from "./head";

export default function Home() {
  return (
    <>
      <Head />
      <AddItem />
      <ItemList />
    </>
  );
}
