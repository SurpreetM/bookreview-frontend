import React from 'react';
import './App.css';
import BooksContainer from './containers/BooksContainer'
import Jumbotron from 'react-bootstrap/Jumbotron';

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
        <Jumbotron>
        <p className="heading"> Book Reviews </p>
        <BooksContainer/>
        </Jumbotron>
      </div>
    )
  }
}
export default App;
