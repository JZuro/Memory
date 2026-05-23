import { useEffect, useState } from "react";
import Display from "./components/Display";
import Card from "./components/Card";
import "./App.css";

const POKEMON_NAMES = [
	"charizard",
	"pichu",
	"bulbasaur",
	"butterfree",
	"rattata",
	"jigglypuff",
	"diglett",
	"meowth",
	"gengar",
	"ditto",
];

type Pokemon = { id: string; name: string; imgurl: string };

function shuffle<T>(array: Array<T>) {
	const arrayCopy = array.slice();
	let currentIndex = arrayCopy.length;
	while (currentIndex != 0) {
		const randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
			arrayCopy[randomIndex],
			arrayCopy[currentIndex],
		];
	}
	return arrayCopy;
}

export default function App() {
	const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
	const [pokemonToRender, setPokemonToRender] = useState<Pokemon[]>([]);
	const [clicked, setClicked] = useState<Set<string>>(new Set());
	const [score, setScore] = useState<number>(0);
	const [highScore, setHighScore] = useState<number>(0);

	useEffect(() => {
		Promise.all(
			POKEMON_NAMES.map(async (id) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
				const data = await res.json();
				return {
					id,
					name: (data.name as string)[0].toUpperCase() + (data.name as string).slice(1),
					imgurl: data.sprites["other"]["official-artwork"]["front_default"] as string,
				};
			})
		).then((pokemon) => {
			setPokemonData(pokemon);
			setPokemonToRender(shuffle(pokemon));
		});
	}, []);

	function handleClick(id: string): void {
		if (clicked.has(id)) {
			if (score > highScore) setHighScore(score);
			setScore(0);
			setClicked(new Set());
		} else {
			setScore(score + 1);
			setClicked(new Set([...clicked, id]));
		}
		setPokemonToRender(shuffle(pokemonData));
	}

	return (
		<>
			<div className="header">
				<h1>Poké-Memory</h1>
				<div className="scoreBoard">
					<p>Score: {score}</p>
					<p>High Score: {highScore}</p>
				</div>
			</div>
			<Display>
				{pokemonToRender.map((pokemon) => (
					<Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
				))}
			</Display>
		</>
	);
}
