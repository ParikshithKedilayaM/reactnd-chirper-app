import React, { Component } from 'react'

class NewTweet extends Component {
    state = {
        text: '',
    }

    setText = (event) => {
        this.setState ({
            text: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("New Tweet: " + this.state.text)
        // TODO
        this.setState({
            text: ''
        })
    }
    render() {
        const tweetleft = 280 - this.state.text.length
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

export default NewTweet
