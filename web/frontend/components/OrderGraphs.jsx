import { Layout, LegacyCard } from "@shopify/polaris";
import React, {  useState } from "react";
import "chart.js/auto";
import { storeData } from "../data";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export const OrderGraphs = () => {
  let [data, setData] = useState(
    {
    labels: storeData.map((d) => d.year),
    datasets: [
      {
        label: "Total Orders",
        data: storeData.map((d) => d.order),
        backgroundColor: ["#008170", "#000000", "#8e8e8e", "#81BF37"],
      },
    ],
  }
  );

  return (
    <Layout>
      <Layout.Section oneHalf>
        <LegacyCard title="Total Orders" sectioned>
          <Line
            data={data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </LegacyCard>
      </Layout.Section>

      <Layout.Section oneThird>
        <LegacyCard title="Completed Orders" sectioned>
          <Doughnut
            data={data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </LegacyCard>
      </Layout.Section>

      <Layout.Section oneThird>
        <LegacyCard title="Remaining Orders" sectioned>
          <Bar
            data={data}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </LegacyCard>
      </Layout.Section>
    </Layout>
  );
};
