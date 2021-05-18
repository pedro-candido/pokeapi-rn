import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native'

const Search = () =>{
    const [text, setText] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const handleInputBlur = () =>{
        setIsFocused(false)
        setIsFilled(!!text)
    }

    const handleInputFocus = () =>{
        setIsFocused(true)
    }

    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder={'Find a Pokemon'}
                value={text}
                onChangeText={setText}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                style={[styles.inputText, (isFocused || isFilled) && { borderColor: '#3760a6' }]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3.5%',
        marginBottom: '3.5%',
    },
    inputText: {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#b1b1b1',
        borderRadius: 5,
    },
})

export default Search