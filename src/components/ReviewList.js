import React from 'react'
import {connect} from 'react-redux'
import { deleteReview } from '../actions/deleteReview';

class ReviewList extends React.Component {

    state = {}

    handleDelete = (review) => {
    this.props.deleteReview(review.id, review.book_id)
    }

    render() {
        //console.log(this.props.reviews)
        return (
            
            <div>
                <h2>All Reviews</h2> 
                {this.props.reviews && this.props.reviews.map (review => 
                    <li key={review.id}> {review.rating}/10 "{review.comments}" 
                    <button className="delete" onClick={() => this.handleDelete(review)}> Delete </button> </li>
                )} 
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteReview: (reviewId, bookId) => dispatch(deleteReview(reviewId, bookId))
      }
}

export default connect (null, mapDispatchToProps) (ReviewList)