const pokeApi = {}

const convertPokeApiToModel = (pokemonsDetail) => {
    const pokemonModel = new Pokemon
    pokemonModel.name = pokemonsDetail.name
    pokemonModel.id = pokemonsDetail.id
    pokemonModel.types = pokemonsDetail.types.map((slotTypes) => slotTypes.type.name)
    pokemonModel.type = pokemonsDetail.types[0].type.name
    pokemonModel.img = pokemonsDetail.sprites.other.dream_world.front_default
    pokemonModel.abilities = pokemonsDetail.abilities.map((slotAblitie) => slotAblitie.ability.name)
    pokemonModel.experience = pokemonsDetail.base_experience
    pokemonModel.weight = pokemonsDetail.weight.toFixed(2)
    return pokemonModel
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())   
                             .then((pokemons) => convertPokeApiToModel(pokemons))
}

pokeApi.getPokemons = (offset = 0, limit = 16) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailsList) => Promise.all(detailsList))
        .then((pokemonsDetail) => pokemonsDetail)
}







