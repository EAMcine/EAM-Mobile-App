import React, { useState } from "react";
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const sendLogin = () => {

    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <TextInput
                label="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={{ marginBottom: 16 }}
            />
            <Button mode="contained" onPress={sendLogin}>
                Login
            </Button>
        </View>
    )
}

export default Login;
