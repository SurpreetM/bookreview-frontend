import React from 'react'


const BookList = (props) => {

    return (
        <div>
            {props.books.map (book => 
            <li key= {book.id}> {book.title} {book.average_rating}/10</li>)}         
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