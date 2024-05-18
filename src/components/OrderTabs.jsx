import Card from "./Card";

function OrderTabs({ item }) {
  return (
    <div className="grid lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 gap-10 pt-6">
      {item.map((element) => (
        <Card key={element._id} items={element}></Card>
      ))}
    </div>
  );
}

export default OrderTabs;
