import "./styles/Card.css";
import { useEffect, useState } from "react";

async function getData(
	pokemon: string,
): Promise<{ name: string; imgurl: string }> {
	const response = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + pokemon + "/",
	);
	if (!response.ok) {
		throw new Error(`${response.status}`);
	}
	const data = await response.json();
	return {
		name: data.name[0].toUpperCase() + data.name.slice(1),
		imgurl: data.sprites["other"]["official-artwork"]["front_default"],
	};
}

export default function Card({ pokemonName }: { pokemonName: string }) {
	const [pokemon, setPokemon] = useState<{ name: string; imgurl: string }>();

	useEffect(() => {
		getData(pokemonName)
			.then(setPokemon)
			.catch((error) => {
				console.error(error);
			});
	}, [pokemonName]);

	return (
		<>
			<img src={pokemon?.imgurl} />
			<h3>{pokemon?.name}</h3>
		</>
	);
}
