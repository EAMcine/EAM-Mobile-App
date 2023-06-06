import React, { useState, useEffect } from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Text, Card } from "react-native-elements";
import Login from "../components/Login";
import Register from "../components/Register";
import SendFavouriteFilms from "../componentsview/SendFavouriteFilms";

const Accueil = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchFilms();
    }, []);

    const fetchFilms = () => {
        const categoriesData = [
            {
                category: "Action",
                films: [
                    {
                        title: "Avengers: Infinity War",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                    },
                    {
                        title: "Avengers: Endgame",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
                    },
                    {
                        title: "John Wick 3",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/MZSzkU7g6k0MA9T1059QHObQUy.jpg",
                    },
                ],
            },
            {
                category: "Comedy",
                films: [
                    {
                        title: "The Hangover",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/sNeoSFfRfrtj3WellcfxaSfWMGk.jpg",
                    },
                    {
                        title: "Superbad",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/6SOK2dSgMTqldcSMmh8LvOZsCWT.jpg",
                    },
                    {
                        title: "Step Brothers",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/6YhdeNPY6DK4B9IKqA1LIU4lIL0.jpg",
                    },
                ],
            },
            {
                category: "Sci-Fi",
                films: [
                    {
                        title: "Inception",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                    },
                    {
                        title: "Interstellar",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                    },
                    {
                        title: "The Matrix",
                        imageUrl:
                            "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                    },
                ],
            },
        ];
        setCategories(categoriesData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Text h3 style={styles.headerText}>
                        Accueil
                    </Text>
                    {categories.map((category, index) => (
                        <View key={index}>
                            <Text h4 style={styles.categoryText}>
                                {category.category}
                            </Text>
                            <ScrollView horizontal={true}>
                                {category.films.map((film, index) => (
                                    <View key={index} style={styles.item}>
                                        <Card>
                                            <Card.Image source={{ uri: film.imageUrl }} style={styles.image} />
                                            <Text style={styles.title}>{film.title}</Text>
                                        </Card>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    ))}
                </View>
                <View style={styles.containerFilms}>
                    <TouchableOpacity>
                        <Text>
                            Vous aussi vous souhaitez ajouter vos films favoris ?
                        </Text>
                        <Text>
                            Cliquez ici !
                        </Text>
                    </TouchableOpacity>
                </View>
                {/*<Login />*/}
                {/*<Register />*/}
                <SendFavouriteFilms />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    headerText: {
        alignSelf: "center",
        marginBottom: 20,
    },
    categoryText: {
        marginBottom: 10,
        fontWeight: "bold",
    },
    item: {
        width: Dimensions.get("window").width * 0.7, // 70% of the screen width
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    containerFilms : {
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        textAlign :"center"
    }
});

export default Accueil;
