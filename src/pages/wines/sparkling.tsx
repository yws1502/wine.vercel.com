import type { NextPage } from "next";
import { WineCardList } from "../../components";

const SparklingPage: NextPage = () => {
  const name = "sparkling";

  return (
    <div>
      <WineCardList name={name} />
    </div>
  )
}

export default SparklingPage;
// Q. export 가 뭔가요 > 몰라도 됌
// 가장 기본적인 템플릿, TypeScript를 쓰는