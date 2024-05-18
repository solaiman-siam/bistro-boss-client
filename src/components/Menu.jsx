import MenuItems from "./MenuItems";
import useMenu from "../hooks/useMenu";
import SectionTitle from "./SectionTitle";

function Menu() {
  const [menu, loading] = useMenu();

  const popular = menu.filter((element) => element.category === "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularData = data.filter(
  //         (element) => element.category === "popular"
  //       );
  //       setMenu(popularData);
  //     });
  // }, []);

  if (loading) return "loading....";

  return (
    <div className="max-w-7xl mx-auto px-32 pb-20 pt-10 ">
      <SectionTitle
        subTitle={"Check it out"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 pt-6">
        {popular.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center w-full pt-5">
        <button className="border-b-2 px-4 py-2 uppercase text-sm border-black rounded-md text-center">
          View Full Menu
        </button>
      </div>
    </div>
  );
}

export default Menu;
