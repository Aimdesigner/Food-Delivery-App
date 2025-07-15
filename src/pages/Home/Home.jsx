import { React, useState } from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
function Home() {
  const [category, setCategory] = useState("All");

  return (
    <>

      {/* Home Banner Section */}
      <Section1 />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

    </>
  );
}

export default Home;
