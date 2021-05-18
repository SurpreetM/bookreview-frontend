import React from 'react'
import {connect} from 'react-redux'
import { addBook } from '../actions/addBook';

class BookInput extends React.Component {

    state = {
        title: '',
        author: '',
        genre: '', 
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
      handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.addBook(this.state)

        alert (`You are adding ${this.state.title}`)
        
        this.setState({
          title: '',
          author: '',
          genre: '',
        })
        
      }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/><br/>
                    <input type='text' placeholder='Author' value={this.state.author} name="author" onChange={this.handleChange}/><br/>
                    <input type='text' placeholder='Genre' value={this.state.genre} name="genre" onChange={this.handleChange}/><br/>
                    <input type="submit"/>
        </form>
      </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      addBook: (data) => dispatch(addBook(data))
    }
}

export default connect (null, mapDispatchToProps) (BookInput)