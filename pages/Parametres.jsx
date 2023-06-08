import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Title, TextInput, Button } from "react-native-paper";

const Parametres = () => {
    const updateName = () => {
        // Logique pour mettre à jour le nom
    };

    const updateEmail = () => {
        // Logique pour mettre à jour l'email
    };

    const updatePassword = () => {
        // Logique pour mettre à jour le mot de passe
    };

    return (
        <View style={styles.container}>
            <Title style={styles.heading}>Paramètres de compte</Title>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Nom :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={updateName}
                    placeholder="Entrez votre nom"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Email :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={updateEmail}
                    placeholder="Entrez votre email"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Mot de passe :</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={updatePassword}
                    secureTextEntry={true}
                    placeholder="Entrez votre mot de passe"
                />
            </View>

            <Button mode="contained" onPress={() => {}}>
                Enregistrer les modifications
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        fontSize: 16,
        height: 40, // Ajustez la taille de la boîte de saisie selon vos préférences
    },
});

export default Parametres;
