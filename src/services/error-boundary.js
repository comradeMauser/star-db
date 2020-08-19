import React from 'react';
import ErrorButton from "./error-button";
import ErrorIndicator from "./error-indicator";



class ErrorBoundary extends React.Component {

    state = {
        error: false
    };

    errCatch = (err) => {
        this.setState({
            error: !this.state.error, loading: false
        });
        console.error("errCatch:", err)
    };

    componentDidCatch(error, errorInfo) {
        this.errCatch(error)
    };

    render() {
        const {error} = this.state
        if (error) {
            return <ErrorIndicator/>
        }
        return (
            <div>
<ErrorButton/>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;