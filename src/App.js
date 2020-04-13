import React from 'react';
// import PropTypes from "prop-types";

// 클래스 컴포넌트. function이 아니기에 return이 없고, import한 React에서 받아온 render method가 있음
class App extends React.Component{
    constructor(props) {
        super(props);
        console.log("hello");
    }
    state = {
        count: 0
    }

    add = () => {
        this.setState(current => ({count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({count: current.count - 1 }));
    };

    componentDidMount() {
        console.log("component rendered");
    }

    componentDidUpdate() {
        console.log("component updated");
    }

    render() {
        console.log("im rendering");
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}> + </button>
                <button onClick={this.minus}> - </button>
            </div>
        );
    }
}

export default App;
