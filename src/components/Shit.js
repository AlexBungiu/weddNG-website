import * as React from 'react';
import {animateComponent} from "../decorators";

@animateComponent('shit')
export class Shit extends React.PureComponent {
    render(){
        let {id} = this.props;
        return(
            <view>
                hello i am {id}
            </view>
        );
    }
}