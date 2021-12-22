import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";
// Q. import 가 뭔가요? > 몰라도 됌

const RedsWinePage: NextPage = () => {
  const name = "reds";
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>reds</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`red-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          )
        })}
      </main>
    </div>
  )
}

export default RedsWinePage;
// Q. export 가 뭔가요 > 몰라도 됌
// 가장 기본적인 템플릿, TypeScript를 쓰는