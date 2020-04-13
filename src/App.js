import React from 'react';
import PropTypes from "prop-types";

// 클래스 컴포넌트. function이 아니기에 return이 없고, import한 React에서 받아온 render method가 있음
class App extends React.Component{
    render(){
        return <h1>I'm a class component.</h1>
    }
}

export default App;
