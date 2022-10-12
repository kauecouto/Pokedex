const screnModal = document.querySelector('.scren-modal')



const criaModalPokemon = (pokemon) => {
    return `
        <article class="modal ${pokemon.type}">
                <div class="header-pokemon">
                    <img src="assets/imagens/button-fechar2.png" class="img-pokebola-modal"
                    alt="botao fechar" onclick="fechaModal()">
                    <h1 class="name-pokemon-modal">${pokemon.name}</h1>
                    <span class="id-pokemon id">#${pokemon.id}</span>
                    <img src="${pokemon.img}" class="img-pokemon-modal" alt="${pokemon.name}">
                </div>
                <div class="info-pokemon">
                    <div>
                        <h2 class="poke-experience">Experience</h2>
                        <p>${pokemon.experience}</p>
                    </div>
                    <div>
                        <h2 class="poke-weight">Weight</h2>
                        <p>${pokemon.weight}Kg</p>
                    </div>
                    <div>
                        <h2>Tipos</h2>
                        ${pokemon.types.map((type) => `<p class="type ${type}">${type}</p>`).join("")}
                    </div>
                    <div>
                        <h2>Abilits</h2>
                        ${pokemon.abilities.map((abilitie) => `<p>${abilitie}</p>`).join("")}
                    </div>
                </div>
        </article>
    `
}

const getPokemonsDetail = (url) => {
    return fetch(url).then((response) => response.json())   
                             .then((pokemons) => convertPokeApiToModel(pokemons))
}

const detalhesPokemon = (url) => {
    getPokemonsDetail(url).then((PokemonDetail) => {
        screnModal.innerHTML = criaModalPokemon(PokemonDetail)
        screnModal.style.display = 'flex'
    })
}

const fechaModal = () => {
    screnModal.style.display = 'none'
}