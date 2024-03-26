import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";

export function Card({ title, data, product, collection, order }) {
  return (
    <Layout.Section oneThird>
      <LegacyCard title={title} sectioned>
        <h2>
          {product && data}
          {collection && data}
          {order && data}
        </h2>
      </LegacyCard>
    </Layout.Section>
  );
}
