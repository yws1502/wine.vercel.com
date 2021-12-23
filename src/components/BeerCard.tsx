import { Beer } from "../types/Beer";

interface BeerCardProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
  const { name, price, image } = beerData;
  console.log(image);
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}