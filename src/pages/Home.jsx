import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
    return (
      <div>
        {/* Banner */}

        <Banner></Banner>
        {/* Heading */}
        <Heading
          title={"Browse Coffees by Category"}
          subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste.

"
        ></Heading>
        {/* Categories tab section */}
        <Categories categories={categories}></Categories>
            {/* Dynamic Nested Component */}
            <Outlet></Outlet>
      </div>
    );
};

export default Home;