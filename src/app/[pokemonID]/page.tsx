export default function ProductsDetails({params}: {params: {pokemonID: string}}) {
    return <p>{params.pokemonID}</p>
}