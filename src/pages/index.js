import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import apiService from "../services/api";

export default function Index() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiService.get(`/votes/calculate`);
      setVotes(response.data);
    })();
  }, [votes]);

  return (
    <Layout>
      <h1>Vote in your favorite coin:</h1>
      <CardList list={votes} />
    </Layout>
  );
}
