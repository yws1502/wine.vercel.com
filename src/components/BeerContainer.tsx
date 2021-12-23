import { Error, Loading, BeerCard } from "../components";
import { useBeerData } from "../hooks/useBeerData";
import { Beer } from "../types/Beer";

interface BeerContainerProps {
  name: string;
}

export const BeerContainer = ({ name }: BeerContainerProps) => {
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Ale Beer</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard  
              key={`ale-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          )
        })}
      </main>
    </div>
  )
}