import React from "react";
import CardList from "../Card_list/cardlist";
const Card = (props) => {
  return (
    <div className="justify-center	content-center">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        className=" "
      />
      <h1 className="text-black text-2xl font-bold mt-10">
        {props.monster.name}
      </h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
