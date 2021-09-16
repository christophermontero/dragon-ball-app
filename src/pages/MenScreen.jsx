import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const men = Characters.filter((char) => char.type === "h");

  return (
    <div className="container mt-3">
      <h1>Men component</h1> <hr />
      <div className="row">
        {men.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
