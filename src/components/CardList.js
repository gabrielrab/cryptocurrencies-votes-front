import React from "react";
import Card from "./Card";

export default function CardList({ list }) {
  return (
    <section className="card-list">
      {list
        .sort((a, b) => (a.votes > b.votes ? -1 : 1))
        .map((record) => (
          <Card code={record.code} name={record.name} votes={record.votes} />
        ))}
    </section>
  );
}
