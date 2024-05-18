import PageCover from "../components/PageCover";
import orderImg from "../../src/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

import useMenu from "../hooks/useMenu";
import OrderTabs from "../components/OrderTabs";
import { useParams } from "react-router-dom";

function Order() {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialindexOf = categories.indexOf(category);
  const [menu] = useMenu();

  console.log(category);

  const [tabIndex, setTabIndex] = useState(initialindexOf);

  const desert = menu.filter((element) => element.category === "dessert");
  const pizza = menu.filter((element) => element.category === "pizza");
  const soup = menu.filter((element) => element.category === "soup");
  const salad = menu.filter((element) => element.category === "salad");
  const drinks = menu.filter((element) => element.category === "drinks");

  return (
    <div>
      <PageCover
        title={"Our Shop"}
        description={"Would you like to try a dish?"}
        image={orderImg}
      ></PageCover>
      <div className="py-10 max-w-7xl mx-auto px-32">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Deserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs item={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={desert}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs item={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Order;
