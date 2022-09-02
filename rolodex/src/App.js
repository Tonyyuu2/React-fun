import { Component } from "react";
import CardList from "./components/card-list/CardList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return  searchField;
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredNames = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search..."
          onChange={onSearchChange}
        />
        <CardList monsters={filteredNames} onSearchChange={onSearchChange} />
      </div>
    );
  }
}

export default App;
