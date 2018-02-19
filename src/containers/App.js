import * as React from 'react';
import connect from 'redux';

@connect()
export default class App extends React.PureComponent {
    render () {
        return <div>
            Hello world!
        </div>
    }
}