import "./styles/Card.css";

type Pokemon = { id: string; name: string; imgurl: string };

export default function Card({
	pokemon,
	handleClick,
}: {
	pokemon: Pokemon;
	handleClick: (id: string) => void;
}) {
	return (
		<div className="card" onClick={() => handleClick(pokemon.id)}>
			<img src={pokemon.imgurl} />
			<h3>{pokemon.name}</h3>
		</div>
	);
}
