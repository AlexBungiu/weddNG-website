import * as React from 'react';
import {animateComponent} from "../decorators";

const DURATION_MILLIS = 2000
const COMPONENT_ID = 'splash-screen';

@animateComponent(COMPONENT_ID)
export class SplashScreen extends React.PureComponent {
    componentDidMount() {
        console.log(' > received props update nexprops.isVisible')
        this.startTimer()
    }
    startTimer() {
        console.log(' > started timer')
        // Self-shut-down when timer reaches 0
        
        setTimeout(() => {this.props.showElement(COMPONENT_ID, 1, false)}, DURATION_MILLIS)
    }
    render(){
        console.log(' > ON RENDER isVisible = ' + this.props.isVisible)
        var style = {
            border: '2px solid red',
            margin: 0,
            width: '100%',
            height: '100%',
            minHeight: '100%',
            position: 'absolute'
          };

        return(
            <div id={COMPONENT_ID} style={style}>
            </div>
        );
    }
}