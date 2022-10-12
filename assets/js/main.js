const buttonBuscaPokemons = document.querySelector('.btn-busca-lista')        
const ListaHTML = document.querySelector('.lista-pokemons')     

const crialistaHTML = (pokemon) => {
    return `
        <li class="card-pokemon ${pokemon.type}" onclick="detalhesPokemon('https://pokeapi.co/api/v2/pokemon/${pokemon.id}')">
            <span class="id-pokemon">#${pokemon.id}</span>
            <h2 class="name-pokemon">${pokemon.name}</h2>
            <div class="box-pokemon">
                <ul class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ul>
                <img src="${pokemon.img}" alt="${pokemon.name}" class="imagem-pokemon">
            </div>
        </li>
    `
}

let offset = 0
let limit = 16

const convertListToHTML = () => {
    pokeApi.getPokemons(offset,limit).then((pokemons) => {
    const newListItens = pokemons.map(pokemon => crialistaHTML(pokemon)).join("")
    ListaHTML.innerHTML += newListItens

    offset += limit
    })
}

convertListToHTML()

buttonBuscaPokemons.addEventListener('click', () => {
    convertListToHTML()
    if(offset >= 180){
        buttonBuscaPokemons.style.display = 'none'
    }
})


