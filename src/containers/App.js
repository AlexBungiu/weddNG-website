import * as React from 'react';
import {Navigator} from "./Navigator";

export default class App extends React.PureComponent {

    render() {
        return <div style={{width: '100%', height: '100%',}}>
            <Navigator/>
        </div>
    }
}