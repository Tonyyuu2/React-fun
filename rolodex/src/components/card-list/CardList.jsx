import React, { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "./CardContainer";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <CardContainer name={name} email={email} id={id} />;
        })}
      </div>
    );
  }
}
