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
            
        default:
            return state 
    }
    
}

