import React, { useState } from "react";
import apiService from "../services/api";

export default function Card({ code, name, votes }) {
  const [voting, setVoting] = useState(false);

  const handleMakeVote = async (coin, action) => {
    setVoting(true);
    await apiService.post(`/vote/${coin}/${action}`);
    setVoting(false);
  };

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
        <button onClick={(e) => handleMakeVote(code, "up")} disabled={voting}>
          Up
        </button>
        <button onClick={(e) => handleMakeVote(code, "down")} disabled={voting}>
          Down
        </button>
      </div>
    </div>
  );
}
