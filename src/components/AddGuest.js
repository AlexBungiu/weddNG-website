import * as React from 'react';
import {theme} from "../constants/theme";
import {View} from "../containers/View";
import {Text} from "../containers/Text";

const styles = {
    message: {
        paddingLeft: theme.defaultHorizontalMargin,
        paddingRight: theme.defaultHorizontalMargin,
        paddingTop: theme.defaultVerticalMargin,
        display: 'flex',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
};


export class AddGuest extends React.PureComponent {
    render() {
        return (
            <View>
                <View style={styles.message}>
                    <Text>
                        Hello and how the fuck are you doing? this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff and this is a very long message
                        where we welcome you and stuff.
                    </Text>
                </View>
            </View>
        )
    }
}