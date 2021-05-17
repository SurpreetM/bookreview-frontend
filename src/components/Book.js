import React from 'react'

export const Book = (props) => {
    console.log(props)
    return (
        
        <li> {props.book.title}, {props.book.average_rating}/10 </li>
        
    )

}

