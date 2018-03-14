import * as React from 'react';
import {connect} from "react-redux";
import {showElement} from "./redux/modules/animation";

export function animateComponent(componentId) {
    return function (Child) {

        class AnimatedComponent extends React.PureComponent {
            constructor(props) {
                super(props);
                props.login('127773');
            }

            render() {
                let {token, showElement, isVisible} = this.props;
                return (
                    <div>
                        <h2>Hello this is the navigation bar</h2>
                        <button onClick={()=>{
                            showElement(componentId, !isVisible);
                        }}>
                            ASD
                        </button>
                        {token}
                        {
                            isVisible &&
                            <Child/>
                        }
                    </div>
                )
            }
        }

        return connect((state, ownProps) => ({
            isVisible: state.animation[componentId] && state.animation[componentId].isVisible,
        }), {
            showElement,
        })(AnimatedComponent);
    }
}
