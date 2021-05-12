import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBooks } from './actions/fetchBooks';


class App extends React.Component {

  // Testing fetch request 
  //componentDidMount () {
  //  fetch ('http://localhost:3000/api/v1/books', {
  //    method: 'GET'
  //  })
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  //}

  componentDidMount() {
    this.props.fetchBooks()
  }

  render () {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}

function mapStateToProps(state){
  console.log(state)
  return {books: state.books}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
