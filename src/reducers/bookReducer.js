//import { Redirect } from "react-router-dom"

export default function bookReducer(state = {books: [], loading: false}, action) { 
    switch (action.type) {
        case 'LOADING_BOOKS':
            return {
                ...state,
                books: [...state.books],
                loading: true
            }
        case 'ADD_BOOKS':
            console.log(action.books)
            return {
                ...state,
                books: action.books,
                loading: false
            }

        case 'ADD_NEW_BOOK':
            console.log(action.book)
            return {
                ...state,
                books: [...state.books, action.book]   
            }
             
           


        case 'ADD_OR_DELETE_REVIEW':
            console.log(action.book)
            let books = state.books.map(book => {
                if (book.id === action.book.id) {
                  return action.book
                } else {
                  return book
                }
              })
            return {...state, books: books}
            
        default:
            return state 
    }
    
}

