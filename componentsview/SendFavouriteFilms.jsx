import React, { useState } from "react";
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const SendFilms = ({ navigation }) => {
    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [genre, setGenre] = useState('');
    const [acteurs, setActeurs] = useState('');
    const [duree, setDuree] = useState('');
    const [imageLien, setImageLien] = useState('');
    const [dateSortie, setDateSortie] = useState(''); // Nouveau champ dateSortie

    const submitFilm = async () => {
        try {
            const dureeValue = isNaN(duree) ? 0 : parseInt(duree, 10);


            const response = await axios.post("http://localhost:3000/sendFilm", {
                titre: titre,
                auteur: auteur,
                genre: genre,
                acteurs: acteurs,
                duree: dureeValue, // Utiliser la valeur convertie
                img_link: imageLien,
                date_sortie: dateSortie
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <TextInput
                label="Titre"
                value={titre}
                onChangeText={text => setTitre(text)}
            />
            <TextInput
                label="Auteur"
                value={auteur}
                onChangeText={text => setAuteur(text)}
            />
            <TextInput
                label="Genre"
                value={genre}
                onChangeText={text => setGenre(text)}
            />
            <TextInput
                label="Acteurs"
                value={acteurs}
                onChangeText={text => setActeurs(text)}
            />
            <TextInput
                label="Durée"
                value={duree}
                onChangeText={text => setDuree(text)}
            />
            <TextInput
                label="Date de sortie"
                value={dateSortie}
                onChangeText={text => setDateSortie(text)}
            />
            <TextInput
                label="Image Lien"
                value={imageLien}
                onChangeText={text => setImageLien(text)}
            />
            <Button onPress={submitFilm}>Envoyer</Button>
        </View>
    );
};

export default SendFilms;
