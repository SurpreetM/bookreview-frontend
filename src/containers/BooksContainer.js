import React from 'react'
import {connect} from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks';
import BookList from '../components/BookList.js'
import BookInput from '../components/BookInput.js'

class BooksContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks()
      }

    render() {
        return (
            <div> 
                <p> Books Container</p>
                <BookInput />
                <BookList books={this.props.books}/>
                
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
        console.log(state)
        return {books: state.books}
      }
      
      
      export default connect(mapStateToProps,mapDispatchToProps) (BooksContainer);
