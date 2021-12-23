import { Error, Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

interface WineCardListProps {
  name: string;
}

export const WineCardList = ({ name }: WineCardListProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>{name} wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          // const { id, wine, winery } = wineData;
          return (
            <WineCard
              key={`port-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          )
        })}
      </main>
    </div>
  )
}
