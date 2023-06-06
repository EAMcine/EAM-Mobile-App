import React, { useState } from "react";
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = () => {
        // Add your registration logic here
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{ marginBottom: 16 }}
            />
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
            <Button mode="contained" onPress={registerUser}>
                Register
            </Button>
        </View>
    )
}

export default Register;
