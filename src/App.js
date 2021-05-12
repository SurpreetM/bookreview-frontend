import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

class App extends React.Component {

  // Testing fetch request 
  componentDidMount () {
    fetch ('http://localhost:3000/api/v1/books', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render () {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default App;
