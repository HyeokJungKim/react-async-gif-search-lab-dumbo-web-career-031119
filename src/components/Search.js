import React, { Component } from 'react';

class Search extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFormSubmit()
  }

  render() {
    console.log("SEARCH PROPS", this.props);
    return (
      <div>
        <h1>This is the Search Form</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={(e) => this.props.handleTermChange(e.target.value)}
            value={this.props.term}
          />
          <input type="submit" />
        </form>

      </div>
    );
  }

}

export default Search;
