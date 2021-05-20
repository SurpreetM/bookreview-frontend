import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

export const Book = (props) => {

    console.log(props.match.params.id)

        //let book = props.books[props.match.params.title] 
        let book = props.books.filter(book => book.id == props.match.params.id)[0]
    
    console.log(book)
    
    return (    
        <div> 
            <p className="heading2">{book? book.title : null }</p> 
            <p className="details" > 
            Author: {book? book.author : null}
            </p>
            <p className="details" > 
            Genre: {book? book.genre : null}
            </p>
            <p className="details" > 
            Average Rating: {book? book.average_rating : null}
            </p>
            <ReviewsContainer book={book}/>
        </div>
    )

}

