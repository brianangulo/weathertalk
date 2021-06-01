import React from 'react';
import { Text, View, Button } from 'react-native';

//test screen
function Screen() {
    return (
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Text>Hello World!!</Text>
            <Button onPress={() => console.log("foo")} title="Press Me" />
        </View>
    );
}

export default Screen;