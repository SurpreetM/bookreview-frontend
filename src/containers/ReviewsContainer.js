import React from 'react'
import ReviewInput from '../components/ReviewInput'
import ReviewList from '../components/ReviewList'


// We might be able to refactor this into a funtional component
// It may not need to pull information from the react store
// As the review could be passed as props from the Book component

class ReviewsContainer extends React.Component { 

    render () {
        console.log(this.props)
        return (
            <div>Reviews Container
            <ReviewList review={this.props.book && this.props.book.reviews}/>
            <ReviewInput/>
            </div>
        )
    }


}

export default ReviewsContainer
