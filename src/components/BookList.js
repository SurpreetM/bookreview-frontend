import React from 'react'
import {Link} from 'react-router-dom'



const BookList = (props) => {
    console.log(props)
    return (
        <div>
            {props.books.map (book => 
              <li key={book.id}> 
                <Link to={`/books/${book.id}`}> {book.title}, {book.average_rating}/10 </Link> </li> 
                )}        
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