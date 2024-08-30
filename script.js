const elRoot = document.getElementById('root');

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
    .then(res => {
        let temp = "";
        res.results.map((pokemon, index) => {
            const id = pokemon.url.split('/').filter(part => part).pop();
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            temp += `
                <div class='card'>
                    <img src="${imageUrl}" alt="${pokemon.name}">
                    <h3>${pokemon.name}</h3>
                    <button class="btn" onclick="showDetail('${pokemon.url}', ${id})">Detail</button>
                    <div id="detail-${id}" class="detail-box">
                        <!-- Detail akan dimasukkan di sini -->
                    </div>
                </div>`;
        });
        elRoot.innerHTML = temp;
    })
    .catch(err => {
        console.log(err);
    });

function showDetail(url, id) {
    // Sembunyikan semua detail
    const allDetails = document.querySelectorAll('.detail-box');
    allDetails.forEach(detail => detail.style.display = 'none');

    // Fetch dan tampilkan detail Pokémon yang diklik
    fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            const detailBox = document.getElementById(`detail-${id}`);
            const detail = `
                <p>Weight: ${pokemon.weight}</p>
                <p>Height: ${pokemon.height}</p>
                <p>Base Experience: ${pokemon.base_experience}</p>
                <p><a href="${url}" target="_blank">More Info</a></p>
            `;
            detailBox.innerHTML = detail;
            detailBox.style.display = 'block'; // Tampilkan detail yang diklik
        })
        .catch(err => console.log(err));
}
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    const greaterThanFive = numbers.filter(number => number > 5);
console.log(evenNumbers); 
console.log(oddNumbers); 
console.log(greaterThanFive);
    console.log('Term pencarian:', searchTerm); 
});