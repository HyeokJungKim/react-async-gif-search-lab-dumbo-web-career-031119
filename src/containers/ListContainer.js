import React, {Component} from 'react'
import Search from '../components/Search'
import DogCard from '../components/DogCard'

class ListContainer extends React.Component{

  state = {
    dogs: [],
    term: "corgi"
  }

  componentDidMount() {
    this.makeFetch(this.state.term)
    .then(responseObj =>{
      this.setState({
        dogs: responseObj.message
      })
    })
  }

  makeFetch = (term) => {
    return fetch(`https://dog.ceo/api/breed/${term}/images/random/3`)
    .then(res => res.json())
  }

  handleTermChange = (termArg) => {
    // console.log(termArg, "FROM handleTermChange");
    this.setState({
      term: termArg
    })
  }

  handleFormSubmit = () => {
    this.makeFetch(this.state.term)
    .then(responseObj =>{
      this.setState({
        dogs: responseObj.message
      })
    })
  }

  render(){
    return(
      <div>
        <Search
          handleTermChange={this.handleTermChange}
          term={this.state.term}
          handleFormSubmit={this.handleFormSubmit}
        />

        {this.state.dogs.map(dogURL => {
          return <DogCard key={dogURL} dog={dogURL}/>
        })}

      </div>
    )
  }
}

export default ListContainer
