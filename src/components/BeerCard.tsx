import { Beer } from "../types/Beer";

interface WineProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: WineProps) => {
  const { name, price, rating } = beerData;
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{rating.reviews}</p>
    </div>
  )
}