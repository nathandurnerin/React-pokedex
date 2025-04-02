interface pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((p) => (
        <button key={p.name} onClick={() => setPokemonName(p.name)}>
          {p.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
