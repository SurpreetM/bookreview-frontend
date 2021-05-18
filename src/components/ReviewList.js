import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'

const reviewList = (props) => {
    console.log(props)
    return (
        <div>
            
            Review List 
            {props.reviews && props.review.map (review => 
              <li key={review.id}> {review.rating}/10 {review.comments}</li>
            )}   

        </div>
    )

}

export default reviewList