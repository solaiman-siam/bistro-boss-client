function MenuItems({ items }) {
  const { name, recipe, image, price } = items;
  console.log(name);
  return (
    <div>
      <div className="flex gap-6 ">
        <img
          className="w-20 h-20 rounded-b-full rounded-tr-full"
          src={image}
          alt=""
        />
        <div className="">
          <div className="flex justify-between">
            <h3 className="text-[18px] uppercase font-light pb-2">
              {name} -----
            </h3>
            <h3 className="text-yellow-400 font-medium ">${price}</h3>
          </div>
          <p className="text-sm text-gray-500 w-11/12"> {recipe}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
