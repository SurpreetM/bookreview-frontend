import React from 'react'
import {connect} from 'react-redux'
import { addReview } from '../actions/addReview';

class ReviewInput extends React.Component {

    state = {
        rating: '',
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state, this.props.book.id)
        this.props.addReview(this.state, this.props.book.id)
        this.setState({
            rating: '',
            comments: ''      
          })
          

    }

    render() {
        return (
            <div>
                <h2> Add your review </h2> 
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Add your comments here' value={this.state.comments} name="comments" onChange={this.handleChange}/><br/>
                <input type='integer' placeholder='Rating out of 10' value={this.state.rating} name="rating" onChange={this.handleChange}/><br/>
                <input type="submit"/>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addReview: (data, bookId) => dispatch(addReview(data, bookId))
    }
}

export default connect (null, mapDispatchToProps) (ReviewInput)