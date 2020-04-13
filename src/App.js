import React from 'react';

class App extends React.Component {
    state = {
        isLoading: true,
        movie: []
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000);
    };

    render() {
        const { isLoading } = this.state;       // es6의 마법
        return (
            <div>
                {isLoading ? "Loading" : "We are ready"}
            </div>
        );
    }
}

export default App;
