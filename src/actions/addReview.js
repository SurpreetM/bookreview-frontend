export const addReview = (data, bookId) => {

    console.log(data, bookId)
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews`, {
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
              alert (`Thank you for your review!`)
              dispatch({type: 'ADD_OR_DELETE_REVIEW', book: book})
          }
          
        })}

    

}