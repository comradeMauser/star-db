import React from 'react';

class ErrorButton extends React.Component {

    state = {
        error: false
    }

    crash = () => {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            this.foo();
        }
        return (
            <div>
                <button className="btn btn-block btn-outline-danger"
                        onClick={() => {
                            this.crash()
                        }}>f()error
                </button>
            </div>
        );
    }
}

export default ErrorButton;