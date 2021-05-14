import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchBooks } from './actions/fetchBooks';
import BooksContainer from './containers/BooksContainer'


class App extends React.Component {

  // Testing fetch request 
  //componentDidMount () {
  //  fetch ('http://localhost:3000/api/v1/books', {
  //    method: 'GET'
  //  })
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  //}

  // Need to move this to the books container
  //componentDidMount() {
  //  this.props.fetchBooks()
  //}

  render () {
    return (
      <div className="App">
        App
        <BooksContainer/>
      </div>
    )
  }
}

// Need to move this to the books container
const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}

function mapStateToProps(state){
  console.log(state)
  return {books: state.books}
}


export default App;
