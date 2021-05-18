import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet, ScrollView } from 'react-native'

import axios, { AxiosResponse } from 'axios'

import Header from '../components/Header'
import Search from '../components/Search'

interface PokemonType{
    slot: number,
    type: {
        name: string,
        url: string
    }
}

interface Pokemon{
    name: string,
    sprites: {
        front_default: string,
        back_default: string
    },
    types: Array<PokemonType>
}

const Pokemons = () =>{

    const baseUrl = 'https://pokeapi.co/api/v2'
    const [pokemons, setPokemons] = useState<Pokemon []>([])
    const [isLoading, setIsLoading] = useState(false)

    const getPokemons = async () =>{
        setIsLoading(true)
        const { data } = await axios.get(`${baseUrl}/pokemon?limit=60`)
        
        const allPokemons: AxiosResponse<Pokemon>[] = await Promise.all(
            data.results.map((pokemon: {url: string}) => axios.get(pokemon.url))
        )
        const pokemonSprites = allPokemons.map(({data}) =>{
            const pokemonData: Pokemon = data
            return {
                "name": pokemonData.name,
                "sprites":{
                    "front_default": pokemonData.sprites.front_default,
                    "back_default": pokemonData.sprites.back_default
                },
                "types": pokemonData.types
            }
        })
        setPokemons(pokemonSprites)
    }

    useEffect(()=>{
        if(pokemons.length === 60) setIsLoading(false)
    }, [pokemons])

    useEffect(() => {
        getPokemons()
    }, [])

    if(isLoading) return (
        <SafeAreaView style={styles.loadingContainer}>
            <Image
                style={{width: 100, height: 100}}
                source={{uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs'}}/>
        </SafeAreaView>
    )

    return(
        <ScrollView> 
            <Header />
            <Search />
            <SafeAreaView style={styles.container}>
                { pokemons.map((pokemon, key: number) => {
                    return(
                        <View key={`pokemon-${key}`} style={styles.pokemonContainer}>
                            <Image
                                style={styles.pokemonImage}
                                source={{uri: pokemon.sprites.front_default}} />
                            <Text style={styles.pokemonName}>{pokemon.name}</Text>
                        </View>
                    )
                })}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '90%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    pokemonContainer: {
        display: 'flex',
        justifyContent:'center'
    },
    pokemonName:{
        textAlign: 'center'
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: '100%'
    },
    pokemonImage: {
        width: 80,
        height: 80,
    }
})

export default Pokemons