import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
    state = {
        text: '',
        toHome : false,
    }

    setText = (event) => {
        this.setState ({
            text: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { dispatch, id } = this.props
        dispatch(handleAddTweet(this.state.text, id))
        this.setState({
            text: '',
            toHome : id ? false : true
        })
    }
    render() {
        const tweetleft = 280 - this.state.text.length

        if (this.state.toHome) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h3 className='center'>Compose New Tweet</h3>
                <form className='new-tweet' onSubmit = {this.handleSubmit}>
                    <textarea
                        onChange = {this.setText}
                        className="textarea"
                        placeholder = "What's happening?"
                        value = {this.state.text}
                        maxLength = {280}
                    />
                    {tweetleft <= 100 && (
                        <div className = 'tweet-length'>
                            <span>Characters left: {tweetleft}</span>
                        </div>
                    )}

                    <button 
                        disabled={this.state.text === ''}
                        className = "btn"
                        type = "submit" >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)
