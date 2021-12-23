import type { NextPage } from "next";
import { MY_PATH } from "../../constants";

const WinePage: NextPage = () => {
  const wines = ["reds", "whites", "port", "sparkling", "rose", "dessert"];
  const path = MY_PATH + "wines/";

  return (
    <div>
      <h1>Wine</h1>
      {wines.map((wine: string) => {
        return (
          <article>
            <a href={`${path}${wine}`}>
            {wine} Wine
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default WinePage;