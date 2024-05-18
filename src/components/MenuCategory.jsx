import { Link } from "react-router-dom";
import PageCover from "./PageCover";
import SectionTitle from "./SectionTitle";
import MenuItems from "./MenuItems";

function MenuCategory({
  image,
  items,
  title,
  subTitle,
  title2,
  description,
  isTitle,
  small,
}) {
  return (
    <div>
      <PageCover
        title={title}
        description={description}
        image={image}
      ></PageCover>
      <div className="py-10">
        {isTitle && (
          <SectionTitle subTitle={subTitle} title={title2}></SectionTitle>
        )}

        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto px-32 md:grid-cols-2 grid-cols-1 gap-10 pt-6">
          {items.map((element) => (
            <MenuItems key={element._id} items={element}></MenuItems>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full  mb-8">
        <Link
          to={`/order/${title}`}
          className="border-b-2 px-4 py-2 uppercase text-sm border-black rounded-md text-center"
        >
          View Full Menu
        </Link>
      </div>
    </div>
  );
}

export default MenuCategory;
