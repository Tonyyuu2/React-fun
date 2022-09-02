import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    const { monsters, onSearchChange } = this.props;

    const cardData = monsters.map((monster) => {
      return <h1 key={monster.id}>{monster.name}</h1>;
    });

    return <div>{cardData}</div>;
  }
}
