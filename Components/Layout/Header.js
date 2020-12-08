import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const styles = StyleSheet.create({
            header: {
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },
            headerText:{
                fontWeight: 'bold',
                fontsize: 20,
                color: '#333',
                letterSpacing: 1
            }

        });
        return (
            <View style={styles.header}>
                {/* icons */}
                <View>
                    <Text style={styles.headerText}>dfds</Text>
                </View>
            </View>

        );
    }

}

export default Header;
