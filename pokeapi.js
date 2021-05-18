const fs = require("fs")
const { get } = require("http")
const fetch = require('node-fetch')

async function getPokemon (inputName) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`)
        .then(response => response.json())
        .then(data => data.types)
        .then(typesArray => typesArray.map(type => type.type.name))
        .then(typeString => console.log(`${inputName.toUpperCase().substring(0, 1)}${inputName.substring(1)}: ${typeString.join(', ')}`)
    )      
}

const fileString = fs.readFileSync('input.txt').toString()
const pokeArray = fileString.split('\n')
pokeArray.forEach(pokemon => getPokemon(pokemon)) 




