import type { NextPage } from "next";
import { WineContainer } from "../../components";
// Q. import 가 뭔가요? > 몰라도 됌

const RoseWinePage: NextPage = () => {
  const name = "rose";
  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default RoseWinePage;
// Q. export 가 뭔가요 > 몰라도 됌
// 가장 기본적인 템플릿, TypeScript를 쓰는
