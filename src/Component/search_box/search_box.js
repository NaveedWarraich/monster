import React from "react";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="grid justify-centera w-3/12 mx-auto mt-5">
      <input
        className="border-2 border-black rounded-md "
        type="search"
        placeholder="search monster"
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
