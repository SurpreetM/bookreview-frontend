import React from 'react'
import {Book} from './Book'



const BookList = (props) => {
    console.log(props)
    return (
        <div>
            {props.books.map (book => 
             <Book book={book}/>)}         
        </div>
    )

}


//class BookList extends React.Component {

//    BookList = () => { return this.props.books.map (book => 
//        <li key={book.id}>Title: {book.title} {book.average_rating}/10</li>)
//    }
//    render() {
//        return (
//            <div>
//                {this.BookList()}
//            </div>
//        )
//    }
//}

export default BookList