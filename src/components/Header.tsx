import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { lighten } from 'polished'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'


const Header = () =>{

    const navigation = useNavigation()

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.back}
                        activeOpacity={0.7}
                    >
                        <Icon
                            color='#feca1b'
                            name='chevron-left' />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Pokedex</Text>
                <View>
                    <Image
                        style={styles.pokeballLogo}
                        source={require('../assets/pokeball.png')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3760a6',
        minHeight: '7.5%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title:{
        color: '#feca1b',
        fontSize: 25,
        fontWeight: 'bold',
        width: '33%',
        textAlign: 'center'
    },
    back:{
        backgroundColor: lighten(0.1, '#3760a6'),
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        maxWidth: 50,
        fontSize: 25,
        display: 'flex',
        justifyContent: "center"
    },
    backText:{
        color: '#feca1b'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between'
    },
    pokeballLogo: {
        width: 50,
        height: 40
    }
})

export default Header