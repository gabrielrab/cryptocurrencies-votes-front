import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import apiService from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWebSockets from "react-use-websocket";

export default function Index() {
  const [votes, setVotes] = useState([]);
  const { lastJsonMessage } = useWebSockets(`ws://159.223.104.144/ws`, {
    onOpen: () => {
      console.log("Websocket connected");
    },
    onMessage: () => {
      if (lastJsonMessage) {
        toast.success(`New vote from ${lastJsonMessage.coin}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
  });

  useEffect(() => {
    (async () => {
      const response = await apiService.get(`/votes/calculate`);
      setVotes(response.data);
    })();
  }, [votes]);

  return (
    <Layout>
      <ToastContainer />
      <h1>Vote in your favorite coin:</h1>
      <CardList list={votes} />
    </Layout>
  );
}
