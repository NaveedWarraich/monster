import React from "react";
import Card from "../Card/cardcomponents";
const CardList = (props) => {
  return (
    <div className=" grid grid-cols-4 p-5  ">
      {props.monsters.map((monster) => (
        <div
          key={monster.id}
          className=" p-10 w-10/12 m-2 rounded-md mx-auto grid justify-center	content-center transform  cursor-pointer
          transition duration-500 ease-in-out bg-blue-300 hover:bg-blue-300 transform hover:-translate-y-1 hover:scale-108 ss"
        >
          <Card monster={monster} />
        </div>
      ))}
    </div>
  );
};
export default CardList;
