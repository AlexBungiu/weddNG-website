import * as React from 'react';
import {connect} from "react-redux";
import {showElement} from "./redux/modules/animation";
import {login} from "./redux/modules/auth";

export function animateComponent(componentId) {
    return function (Child) {

        class AnimatedComponent extends React.PureComponent {
            constructor(props) {
                super(props);
                props.login('127773');
            }

            render() {
                let {token, showElement, isVisible, id} = this.props;
                return (
                    <div>
                        <h2>Hello this is the navigation bar</h2>
                        <button onClick={() => {
                            showElement(componentId, id, !isVisible);
                        }}>
                            {componentId + '_' + id}
                        </button>
                        {token}
                        {
                            isVisible &&
                            <Child
                                {...this.props}
                                showElement={showElement.bind(this)}
                            />
                        }
                    </div>
                )
            }
        }

        return connect((state, ownProps) => {
            let id = componentId + '_' + ownProps.id;
            return {
                animationId: id,
                isVisible: state.animation[id] && state.animation[id].isVisible,
            }
        }, {
            login,
            showElement,
        })(AnimatedComponent);
    }
}
