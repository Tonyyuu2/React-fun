import React, { Component } from 'react'
import './search-box.styles.css'

export default class SearchBox extends Component {
  render() {
    return (
      <input
          className="search-box"
          type="search"
          placeholder="search..."
          onChange={this.props.onSearchChange}
        /> 
    )
  }
}
