import React from 'react'


const reviewList = (props) => {
    console.log(props.review)
    return (
        <div>
            
            Review List 
            {props.review && props.review.map (review => 
              <li key={review.id}> {review.rating}/10 {review.comments}</li>
            )}   

        </div>
    )

}

export default reviewList