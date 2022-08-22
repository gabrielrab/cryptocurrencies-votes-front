import React from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <h1>Vote in your favorite coin:</h1>
      <CardList
        list={[
          {
            code: "USDT",
            name: "Tether",
            votes: 3,
          },
          {
            code: "BTC",
            name: "Bitcoin",
            votes: 1,
          },
          {
            code: "KLV",
            name: "Klever",
            votes: 4,
          },
        ]}
      />
    </Layout>
  );
}
