//async with car brannd
setTimeout(myFunc, 1000);

function myFunc() {
    console.log("Hello from myFnc");
}

// async await example with pokemon API
async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" });
    const data = await response.json();
    console.log(data);
}
// fetchPokemon();

// handle error
async function fetchPokemonWithErrorHandling() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

// fetchPokemonWithErrorHandling();

// 2 pokemon APIs
async function fetchPikachu() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" });
    const data = await response.json();
    console.log(data);
}
async function fetchBulbasaur() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/2", { method: "GET" });
    const data = await response.json();
    console.log(data);
}
// (async () => {
//     await fetchPikachu();
//     await fetchBulbasaur();
// })();

// 2 pokemon APIs with Promise.all
async function fetchAllPokemon() {
    const [pikachuResponse, bulbasaurResponse] = await Promise.all([
        fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" }),
        fetch("https://pokeapi.co/api/v2/pokemon/2", { method: "GET" })
    ]);
    const [pikachuData, bulbasaurData] = await Promise.all([
        pikachuResponse.json(),
        bulbasaurResponse.json()
    ]);
    console.log(pikachuData);
    console.log(bulbasaurData);
}
fetchAllPokemon();