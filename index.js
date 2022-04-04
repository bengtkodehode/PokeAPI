const pokeImg = document.getElementById('img')
const title = document.querySelector('#title')
const pokemonNum = document.getElementById('pokeId')
const pokeType = document.getElementById('type')
const pokeHeight = document.getElementById('height')
const pokeWeight = document.getElementById('weight')
const pokeDesc = document.getElementById('flavour')
const pokebtn = document.getElementById('pokebutton')
const nextPoke= document.getElementById('nextPokemon')

const baseUrl = "https://pokeapi.co/api/v2/"

let pokemonID = 1

const getPokemon = async(pokemonID) => {
    let description = await fetch(`${baseUrl}pokemon-species/${pokemonID}/`)
    let pokeDescription = await description.json()
    console.log(pokeDescription)

    let response = await fetch(`${baseUrl}pokemon/${pokeDescription.name}`)
    let pokeInfo = await response.json()
    console.log(pokeInfo)

    pokeImg.src = pokeInfo.sprites.front_default
    title.textContent = pokeInfo.species.name
    pokeType.textContent = pokeInfo.types[0].type.name
   
    // const id = styleId(pokeInfo.id)

    //Giving the id input 
    const id = `${pokeInfo.id}`.padStart(3,'0')
    pokemonNum.textContent = `No.${id}`

    pokeHeight.textContent = `HT ${pokeInfo.height / 10} m`
    pokeWeight.textContent = `WT ${pokeInfo.weight / 10} kg`
    pokeDesc.textContent = `${pokeDescription.flavor_text_entries[14].flavor_text}`
    
    return'All done'
}
getPokemon(pokemonID)


.then(value => console.log(value)) 
.catch(console.error("Something went wrong! Please retry."))

nextPoke.addEventListener('mouseover', () => {
    pokeImg.style.filter = 'drop-shadow(0 0 0.75rem crimson)'
})

nextPoke.addEventListener('mouseleave', () => {
    pokeImg.style.filter = ''
})

nextPoke.addEventListener('click', () => {
    pokemonID = Math.floor(Math.random() * 151)
    // pokemonID++ if you want to render 1 after 1 pokemon.
    // pokemonID++
    if (pokemonID > 150) pokemonID = 1
    getPokemon(pokemonID)
})

// const styleId = (id) => {
//     id += 1000
//     id = id +''
//     id = id.slice(1)
//     return id
// }

   
