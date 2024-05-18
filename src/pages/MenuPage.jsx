import { Helmet } from "react-helmet-async";
import PageCover from "../components/PageCover";
import coverImg from "../../src/assets/menu/banner3.jpg";
import useMenu from "../hooks/useMenu";
import MenuItems from "../components/MenuItems";
import desertImg from "../../src/assets/menu/dessert-bg.jpeg";
import saladImg from "../../src/assets/menu/salad-bg.jpg";
import soupImg from "../../src/assets/menu/soup-bg.jpg";
import pizzaImg from "../../src/assets/menu/pizza-bg.jpg";
import { Link } from "react-router-dom";
import MenuCategory from "../components/MenuCategory";

function MenuPage() {
  const [menu] = useMenu();

  const offered = menu.filter((element) => element.category === "offered");
  const desert = menu.filter((element) => element.category === "dessert");
  const pizza = menu.filter((element) => element.category === "pizza");
  const soup = menu.filter((element) => element.category === "soup");
  const salad = menu.filter((element) => element.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div>
        <MenuCategory
          title={"our menu"}
          description={"Would you like to try a dish?"}
          image={coverImg}
          subTitle={"Dont miss"}
          items={offered}
          title2={"todays offer"}
          isTitle={true}
        ></MenuCategory>
      </div>

      <div>
        <MenuCategory
          title={"dessert"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          image={desertImg}
          items={desert}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          title={"pizza"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          image={pizzaImg}
          items={pizza}
        ></MenuCategory>
      </div>

      <div>
        <MenuCategory
          title={"salad"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          image={saladImg}
          items={salad}
        ></MenuCategory>
      </div>
      <div>
        <MenuCategory
          title={"soup"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          image={soupImg}
          items={soup}
        ></MenuCategory>
      </div>
    </div>
  );
}

export default MenuPage;
