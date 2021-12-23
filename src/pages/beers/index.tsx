import type { NextPage } from "next";
import { MY_PATH } from "../../constants";

const BeerPage: NextPage = () => {
  let path = MY_PATH + "beers/"

  return (
    <div>
      <h1>Beer</h1>
        <article>
          <a href={path + "/ale"}>
            ale beer
          </a>
        </article>
        <article>
          <a href={path + "/stouts"}>
            stouts beer
          </a>
        </article>
    </div>
  )
}

export default BeerPage;
