import React from 'react'

class BookList extends React.Component {

    BookList = () => { return this.props.books.map (book => 
        <li>{book.title}</li>)
    }
    render() {
        return (
            <div>
                {this.BookList()}
            </div>
        )
    }
}

export default BookList