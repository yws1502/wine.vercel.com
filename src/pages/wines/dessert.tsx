import type { NextPage } from "next";
import { WineContainer } from "../../components";

const DessertPage: NextPage = () => {
  const name = "dessert";

  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default DessertPage;
// Q. export 가 뭔가요 > 몰라도 됌
// 가장 기본적인 템플릿, TypeScript를 쓰는