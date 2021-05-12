export const fetchBooks = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_BOOKS'})
      fetch('http://localhost:3000/api/v1/books').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_BOOKS', books: responseJSON })
      })
    }
  }