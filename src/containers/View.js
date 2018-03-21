import * as React from 'react';

const viewStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
};

export class View extends React.PureComponent {
    render() {
        let {children, style} = this.props;
        return (
            <div style={{...viewStyle, ...(style || {})}}>
                {children}
            </div>
        );
    }
}