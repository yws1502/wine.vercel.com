import type { NextPage } from "next";
import { MY_PATH } from "../../constants";

const WinePage: NextPage = () => {
  const wines = ["reds", "whites", "port", "sparkling", "rose", "dessert"];
  let path = MY_PATH + "wines/";

  return (
    <div>
      <h1>Wine</h1>
        <article>
          <a href={path + "/reds"}>
          reds Wine
          </a>
        </article>
        <article>
          <a href={path + "/whites"}>
          whites Wine
          </a>
        </article>
        <article>
          <a href={path + "/port"}>
          port Wine
          </a>
        </article>
        <article>
          <a href={path + "/sparkling"}>
          sparkling Wine
          </a>
        </article>
        <article>
          <a href={path + "/rose"}>
          rose Wine
          </a>
        </article>
        <article>
          <a href={path + "/dessert"}>
          dessert Wine
          </a>
        </article>
    </div>
  )
}

export default WinePage;