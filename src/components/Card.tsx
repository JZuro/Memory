import "./styles/Card.css";
import { useEffect, useState} from "react";

async function getData(pokemon: string): Promise<string> {
	const response = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + pokemon + "/"
	);
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	const data = await response.json();
	return data.sprites.front_default;
}

export default function Card() {
	const [pokemon, setPokemon] = useState<string | null>(null);

	useEffect(() => {
		getData("pikachu")
			.then(setPokemon)
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<>
			{pokemon && <img src={pokemon} />}
		</>
	);
}
