function Card({ items }) {
  const { name, recipe, image, price } = items;
  return (
    <div>
      <div className="max-w-xs relative   shadow-md dark:bg-gray-900 bg-gray-100 text-gray-100 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500 dark:bg-gray-500"
        />
        <p className="absolute top-5 right-5 font-semibold px-4 bg-black text-white py-1 rounded-md">
          ${price}
        </p>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl text-black font-semibold text-center ">
              {name}
            </h2>
            <p className="text-black text-center dark:text-gray-800">
              {recipe}
            </p>
          </div>
          <button
            type="button"
            className="flex w-fit items-center text-center mx-auto justify-center px-6  p-3 font-semibold tracking-wide  bg-gray-200 dark:bg-violet-600 text-yellow-400 dark:text-gray-50 rounded-md text-sm uppercase border-b-2 border-yellow-400"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
