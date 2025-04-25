"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//async with car brannd
setTimeout(myFunc, 1000);
function myFunc() {
    console.log("Hello from myFnc");
}
// async await example with pokemon API
function fetchPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" });
        const data = yield response.json();
        console.log(data);
    });
}
// fetchPokemon();
// handle error
function fetchPokemonWithErrorHandling() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = yield response.json();
            console.log(data);
        }
        catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    });
}
// fetchPokemonWithErrorHandling();
// 2 pokemon APIs
function fetchPikachu() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" });
        const data = yield response.json();
        console.log(data);
    });
}
function fetchBulbasaur() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon/2", { method: "GET" });
        const data = yield response.json();
        console.log(data);
    });
}
// (async () => {
//     await fetchPikachu();
//     await fetchBulbasaur();
// })();
// 2 pokemon APIs with Promise.all
function fetchAllPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        const [pikachuResponse, bulbasaurResponse] = yield Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/1", { method: "GET" }),
            fetch("https://pokeapi.co/api/v2/pokemon/2", { method: "GET" })
        ]);
        const [pikachuData, bulbasaurData] = yield Promise.all([
            pikachuResponse.json(),
            bulbasaurResponse.json()
        ]);
        console.log(pikachuData);
        console.log(bulbasaurData);
    });
}
fetchAllPokemon();
