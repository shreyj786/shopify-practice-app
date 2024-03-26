import { Layout, Page } from "@shopify/polaris";
import { OrderGraphs } from "../components/OrderGraphs";
import { Card, OrderDetails } from "../components";
import { useAuthenticatedFetch } from "../hooks";
import { useEffect, useState } from "react";

export default function HomePage() {

  const  fetch = useAuthenticatedFetch();
  
  const [productCount, setProductCount] = useState(0)
  const [customCollectionCount, setCustomCollectionCount] = useState(0)
  const [totalOrderCount, setTotalOrderCount] = useState(0)
  const [fulfilledOrderCount, setFulfilledOrderCount] = useState(0)
  

  const productCountHandler = async () => {
    try {
      let request = await fetch("/api/products/count", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      let response = await request.json();
      setProductCount(response.count)
    } catch (error) {
      console.log("error", error);
    }

  }

  const collectionCountHandler = async () => {
    try {
      let request = await fetch("/api/products/count", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      let response = await request.json();
      setCustomCollectionCount(response.count)
    } catch (error) {
      console.log("error", error);
    }

  }

  const orderListHandler = async () => {
    try {
      let request = await fetch("/api/orders/all", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      let response = await request.json();
      setTotalOrderCount(response.data.length)
      const fulfilledOrder = response.data.filter(item => item.fulfillment_status === "fulfilled")
      setFulfilledOrderCount(fulfilledOrder.length)
    } catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {
    productCountHandler()
    collectionCountHandler()
    orderListHandler()
  }, [])
  

  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs sections">
          <OrderGraphs />
        </div>

        <div className="cards-section">
          <Layout>
            <Card title="Total Order" data = {totalOrderCount} order/>
            <Card title="Fulfilled Order" data = {fulfilledOrderCount} order />
            <Card title="Remaining Order" data = {totalOrderCount - fulfilledOrderCount} order/>
            <Card title="Total Product" data = {productCount} product/>
            <Card title="Total Collections"  data = {customCollectionCount} collection/>
          </Layout>
        </div>
        <div className="order-details-section">
          <OrderDetails/>
        </div>
      </div>
    </Page>
  );
}
