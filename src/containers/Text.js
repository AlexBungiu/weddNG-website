import * as React from 'react';

const textStyle = {
    fontSize: 32,
};

export class Text extends React.PureComponent {
    render() {
        let {children, style} = this.props;
        return (
            <div style={{...textStyle, ...(style || {})}}>
                {children}
            </div>
        );
    }
}