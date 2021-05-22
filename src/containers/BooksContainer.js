import React from 'react'
import {connect} from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks';
import BookList from '../components/BookList.js'
import BookInput from '../components/BookInput.js'
import {Route, Switch} from 'react-router-dom'
import {Book} from '../components/Book'
import NavBar from '../components/NavBar'


class BooksContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
            <div>
                <NavBar/> 
                <Switch>
                <Route exact path='/books/new' component = {BookInput}/>
                <Route exact path='/books' render = {() => <BookList books={this.props.books}/> }/>
                <Route exact path='/books/:id' render={(routerProps) => <Book {...routerProps} books={this.props.books}/>}/> 
                </Switch>        
            </div>
            
        ) 
    }

}

// Decide whether to use arrow syntax or not 

    const mapDispatchToProps = dispatch => {
        return {
          fetchBooks: () => dispatch(fetchBooks())
        }
      }
      
    function mapStateToProps(state) {
        console.log(state.books)
        return {books: state.books}
      }
      
      
      export default connect(mapStateToProps,mapDispatchToProps) (BooksContainer);
