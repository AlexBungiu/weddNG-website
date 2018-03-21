import * as React from 'react';
import {login} from "../redux/modules/auth";
import {connect} from "react-redux";
import {NAVIGATOR_PAGES} from "../constants/enums";
import {navigateToScreen} from "../redux/modules/navigator";
import {AddGuest} from "../components/AddGuest";
import {View} from "./View";


@connect((state, ownProps) => ({
    username: state.auth.username,
    error: state.auth.error,
    screenId: state.navigator.screen,
}), {
    login,
    navigateToScreen,
})
export class Navigator extends React.PureComponent {

    constructor(props) {
        super(props);
        props.login();
    }

    getComponent() {
        let {screenId} = this.props;
        switch (screenId) {
            case NAVIGATOR_PAGES.SPLASH:
                return null;
            case NAVIGATOR_PAGES.ADD_GUEST:
                return AddGuest;
        }
    }

    render() {

        let Screen = this.getComponent();

        return (
            <View>
                <Screen
                    {...this.props}
                />
            </View>
        )
    }
}
