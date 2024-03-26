import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";

export function OrderDetails() {
  return (
    <Layout>
      <Layout.Section oneThird>
        <LegacyCard title="Order Details" sectioned>
          <p className="text-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, sequi molestiae commodi, neque perferendis ex aperiam
            quidem, perspiciatis sunt iusto inventore eveniet facere. Aperiam
            sed error eligendi fuga dolorem doloribus?
          </p>
        </LegacyCard>
      </Layout.Section>
    </Layout>
  );
}
