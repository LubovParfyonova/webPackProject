import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';


// JSX tag:
// <type props="value">children</type>

class HelloWorld extends Component {

    render () {
//       return React.createElement('p', {title: 'hello'}, 'Hello from react');
        return <p title="hello" className="paragraph">Hello from <span> react </span> </p>

    }
}

const compHello = React.createElement(HelloWorld);

const root = document.getElementById('root');

ReactDOM.render(compHello, root);