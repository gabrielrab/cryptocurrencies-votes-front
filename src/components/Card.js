import React from "react";

export default function Card({ code, name, votes }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{votes}</h3>
        <p>{votes > 0 ? "votes" : "vote"}</p>
      </div>
      <div className="card-content">
        <h3>{code}</h3>
        <p>{name}</p>
      </div>
      <div className="card-actions">
        <button>Up</button>
        <button>Down</button>
      </div>
    </div>
  );
}
