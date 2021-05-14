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
            console.log(action.payload)
            return {

            }
            
        default:
            return state 
    }
    
}

