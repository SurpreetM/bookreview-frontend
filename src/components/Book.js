// Functional Component (5)

import ReviewsContainer from '../containers/ReviewsContainer'

export const Book = (props) => {

    //console.log(props.match.params.id)
        let book = props.books.filter(book => book.id == props.match.params.id)[0]  
    //console.log(book)
    
    return (    
        <div> 
            <p className="heading2">{book? book.title : null }</p> 
            <p className="details" > 
            Author: {book? book.author : null}
            </p>
            <p className="details" > 
            Genre: {book? book.genre : null}
            </p>
            <p className="details" > 
            Average Rating: {book? Math.round(book.average_rating*100)/100 : null}
            </p>
            <ReviewsContainer book={book}/>
        </div>
    )

}

