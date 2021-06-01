// Functional component (3)

export const deleteReview = (reviewId, bookId) => {
    //console.log(reviewId, bookId)
    console.log('b')
    return (dispatch) => {
      console.log('c')
        return fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews/${reviewId}`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(book => {
          console.log('d')
          return dispatch({type: 'ADD_OR_DELETE_REVIEW', book: book})
        })
      }
      console.log('e')

}
