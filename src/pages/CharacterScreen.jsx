import React from "react";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { idCharacter } = useParams();
  const { type, name, description } = Characters.find(
    (char) => char.id === idCharacter
  );
  const path = `/assets/${type}-${idCharacter}.png`;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container row mt-5">
      <div className="col-8">
        <img
          className="img-thumbnail"
          style={{ height: "400px" }}
          src={path}
          alt={idCharacter}
        />
      </div>
      <div className="col-4">
        <h2>Name: {name}</h2>
        <p>Description: {description}</p>
        <button onClick={handleBack} className="btn btn-outline-warning">
          Go back
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
