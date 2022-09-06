import React, { Component } from "react";

export default class CardContainer extends Component {
  render() {
    const { name, email, id } = this.props;

    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
