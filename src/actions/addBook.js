// Functional component (1)
import { Redirect } from "react-router-dom"

export const addBook = (data) => {
    console.log(data)
    
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/books', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(book => { 
        if (book.error) {
            alert(book.error)
        } else {
            alert (`You are adding ${book.title}`)
            dispatch({type: 'ADD_NEW_BOOK', book: book})
             
        }
        
      })}
    }
