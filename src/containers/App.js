import * as React from 'react';
import {connect} from "react-redux";
import {login} from "../redux/modules/auth";

@connect((state, ownProps) => ({
    username: state.auth.username,
    error: state.auth.error,
}), {
    login,
})
export default class App extends React.PureComponent {

    authenticate() {
        let {login} = this.props;
        login("123");
        // fetch('/login/123')
        //     // .then(response => response.body)
        //     .then(response =>{console.log(response.json());})
        //     .catch();
    }

    render() {
        return <div style={{display: 'flex', flexDirection: 'column'}}>
            Hello world!
            <input type="file" accept="image/*" capture="camera"/>
            <button onClick={this.authenticate.bind(this)}/>
        </div>
    }
}