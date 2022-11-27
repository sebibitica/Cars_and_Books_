import { Button, StyleSheet, Text, View, Image } from 'react-native';

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://www.motortrend.com/uploads/f/129558413.jpg" }} />
            <View style={styles.centru}>
                <View style={styles.welcome}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>WELCOME! </Text>
                    <Text style={{ fontSize: 40 }}>{"\u{1F9BE}"}</Text>
                </View>
                <Text style={styles.textStyle}>You can see some cars and books here, that's it.</Text>
            </View>
            <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: "https://palarisme.ro/wp-content/uploads/2020/09/Essential-Books.jpg" }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centru: {
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
        color: 'red',
    },
});