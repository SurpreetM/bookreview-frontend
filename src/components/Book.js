import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

export const Book = (props) => {

    console.log(props.match.params.id)

        //let book = props.books[props.match.params.title] 
        let book = props.books.filter(book => book.id == props.match.params.id)[0]
    
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

