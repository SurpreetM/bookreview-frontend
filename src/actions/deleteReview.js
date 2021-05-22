// Functional component (3)

export const deleteReview = (reviewId, bookId) => {
    //console.log(reviewId, bookId)
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews/${reviewId}`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(book => dispatch({type: 'ADD_OR_DELETE_REVIEW', book: book}))
      }

}
