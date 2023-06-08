import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const Abonnement = () => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>Offre Standard</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        faucibus purus ac quam eleifend, a aliquam sapien congue.
                    </Paragraph>
                    <Paragraph style={styles.price}>$9.99/mois</Paragraph>
                    <Button mode="contained" style={styles.button}>
                        Choisir
                    </Button>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                    <Title>Offre Premium</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        faucibus purus ac quam eleifend, a aliquam sapien congue.
                    </Paragraph>
                    <Paragraph style={styles.price}>$19.99/mois</Paragraph>
                    <Button mode="contained" style={styles.button}>
                        Choisir
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    card: {
        marginBottom: 16,
        width: "90%",
    },
    price: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 8,
    },
    button: {
        marginTop: 16,
    },
});

export default Abonnement;
