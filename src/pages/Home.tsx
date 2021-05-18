import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Platform, TouchableOpacity, Button } from 'react-native'

const Home = () =>{

    const navigation = useNavigation()

    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.main}>
                <Text style={styles.title}>
                    Welcome to your Pokedex!
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}
                        onPress={() => navigation.navigate('Pokemons')}
                    >
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3760a6',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    main:{
        display: 'flex',
        justifyContent: 'space-between',
        height: '30%'
    },
    title:{
        color: '#feca1b',
        fontSize: 40,
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textDecorationColor: 'blue',
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#feca1b',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        color: '#3760a6',
        fontWeight: 'bold'
    },
    buttonContainer: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home