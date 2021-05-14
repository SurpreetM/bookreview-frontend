//export const addBook = () => {
//    console.log("You are in the action creator")
//}


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
      .then(book => console.log(book))
    }
  
  }