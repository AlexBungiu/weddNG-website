import * as React from 'react';
import {connect} from "react-redux";
import {login} from "../redux/modules/auth";
import {animateComponent} from "../decorators";
import {Shit} from "../components/Shit";

@connect((state, ownProps) => ({
    username: state.auth.username,
    error: state.auth.error,
}), {
    login,
})
export default class App extends React.PureComponent {
    //
    // componentDidMount(){
    //     this.props.login("123");
    // }
    //
    // authenticate() {
    //     let {login} = this.props;
    //     login("123");
    //     // fetch('/login/123')
    //     //     // .then(response => response.body)
    //     //     .then(response =>{console.log(response.json());})
    //     //     .catch();
    // }

    render() {
        return <view>
            <Shit id={'a'}/>
            <Shit id={'b'}/>
            <Shit id={'c'}/>
        </view>
    }
}