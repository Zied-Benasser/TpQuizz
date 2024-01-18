import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../lib/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        try {
            const reponse = await signInWithEmailAndPassword(auth, email, password);
            console.log(reponse);
            navigation.navigate('Start');
        } catch (error) {

            alert("Connexion echoué : " + error.message);
        }
    }

    const signUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Start');
        } catch (error) {
            console.log(error);
            alert("ceation de compte echoué" + error.message);
        }
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue au Quiz de Culture 🎉</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                title="Se connecter"
                onPress={() => {
                    signIn();
                }}
            />
            <Button
                title="S'inscrire"
                onPress={() => {
                    signUp();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        margin: 10,
    },
});

export default Login;