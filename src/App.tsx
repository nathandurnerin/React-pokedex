import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

interface pokemon {
  name: string;
  imgSrc?: string;
}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button onClick={() => setPokemonName("bulbasaur")}>Bulbasaur</button>
      <button onClick={() => setPokemonName("mew")}>Mew</button>
    </div>
  );
}

export default App;
