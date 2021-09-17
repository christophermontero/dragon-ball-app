import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const women = Characters.filter((char) => char.type === "m");

  return (
    <div className="container mt-3">
      <div className="row">
        {women.map((woman) => (
          <Card key={woman.id} {...woman} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
