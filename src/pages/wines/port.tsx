import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const PortWinePage: NextPage = () => {
  // const { data, error } = useSWR("https://api.sampleapis.com/wines/reds", fetcher);
  const name = "port";
  const { data, error } = useWineData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>Port</h1>
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

// Next.js에서 ServerSideRendering 을 위해서 데이터를 미리 불러오는 함수
// SWR은 serversiderendering은 같이 사용하지 못한다.
// export async function getServerSideProps(context) {
//   const { data, error } = useSWR("https://api.sampleapis.com/wines/reds", fetcher);

//   return { props: { data, error }}
// }

export default PortWinePage;
// Q. export 가 뭔가요 > 몰라도 됌
// 가장 기본적인 템플릿, TypeScript를 쓰는