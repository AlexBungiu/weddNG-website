import * as React from 'react';
import {login} from "../redux/modules/auth";
import {connect} from "react-redux";
import {NAVIGATOR_PAGES} from "../constants/enums";
import {navigateToScreen} from "../redux/modules/navigator";


@connect((state, ownProps) => ({
    username: state.auth.username,
    error: state.auth.error,
    screenId: state.navigator.screen,
}), {
    login,
    navigateToScreen,
})
class Navigator extends React.PureComponent {

    constructor(props) {
        super(props);
        props.login();
    }

    getComponent() {
        let {screenId} = this.props;
        switch (screenId) {
            case NAVIGATOR_PAGES.SPLASH:
                return null;
        }
    }

    render() {

        let Screen = this.getComponent()

        return (
            <view>
                <Screen
                    {...this.props}
                />
            </view>
        )
    }
}
