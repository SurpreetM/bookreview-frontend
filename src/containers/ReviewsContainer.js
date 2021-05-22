import React from 'react'
import ReviewInput from '../components/ReviewInput'
import ReviewList from '../components/ReviewList'

const ReviewsContainer = (props) => {
    //console.log(props)
    return (
       
        <div>
            <ReviewList reviews={props.book && props.book.reviews}/>
            <ReviewInput book={props.book}/>
        </div>
    )
}

export default ReviewsContainer

//class ReviewsContainer extends React.Component { 

//    render () {
//        console.log(this.props)
//        return (
//            <div>
//            <ReviewList reviews={this.props.book && this.props.book.reviews}/>
//            <ReviewInput book={this.props.book}/>
//            </div>
//        )
//    }


//}

//export default ReviewsContainer