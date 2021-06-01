import React from 'react'
import {Link} from 'react-router-dom'


//const BookList = (props) => {
//    console.log(props)
//    return (
//         <div>
//             {props.books.map (book => 
//               <li key={book.id}> 
//                 <Link to={`/books/${book.id}`}> {book.title}, {Math.round(book.average_rating*100)/100}/10 </Link> </li> 
//                 )}        
//         </div>
//     )
// }


class BookList extends React.Component {

    state = {
        searchTerm: ''
      }

   
   BookList = () => { 
         
        return this.props.books.map (book => { 

            if (book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                return <li key={book.id}> 
               <Link to={`/books/${book.id}`}> {book.title}, {Math.round(book.average_rating*100)/100}/10 </Link> 
               </li>
            }           
           
           }
       )
   }

   handleChange = (e) => {
    this.setState({
        searchTerm: e.target.value
      })
      console.log(this.state)
   }

   render() {
       return (
           <>  
           <form>
               <input type='text' placeholder='Search' onChange={this.handleChange}  />
           </form>
           <div>
               {this.BookList()}
           </div>
           </>
       )
   }
}

export default BookList