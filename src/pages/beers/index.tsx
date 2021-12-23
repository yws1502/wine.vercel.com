import type { NextPage } from "next";
import { MY_PATH } from "../../constants";

const BeerPage: NextPage = () => {
  const beers = ["ale", "stouts"];
  const path = MY_PATH + "beers/"

  return (
    <div>
      <h1>Beer</h1>
      {beers.map((beer: string) => {
        return (
          <article>
            <a href={`${path}${beer}`}>
              {beer} beer
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default BeerPage;
