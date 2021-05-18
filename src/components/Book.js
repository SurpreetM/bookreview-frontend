import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

export const Book = (props) => {

    console.log(props)

        let book = props.books[props.match.params.id -1] 
    
    console.log(book)
    
    return (    
        <div> 
            <h1>{book? book.title : null }</h1> 
            <p> Author: {book? book.author : null} </p> 
            <p>Genre: {book? book.genre : null}</p>
            <ReviewsContainer book={book}/>
        </div>
    )

}

