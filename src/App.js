import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import CardList from "./Component/Card_list/cardlist";
import SearchBox from "./Component/search_box/search_box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((Response) =>
      Response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="">
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => this.setState({ searchFiled: e.target.value })}
        />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
