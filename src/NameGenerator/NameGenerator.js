import React, { useState } from "react";
import PersonCard from "../PersonCard/PersonCard";
import "./NameGenerator.css";

const NameGenerator = () => {
  const [persons, setPersons] = useState([]);

  const addNewPerson = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();

    const newPerson = result.results[0];
    setPersons(persons.concat([newPerson]));
  };

  const deletePerson = (id) => {
    setPersons(persons.filter((person) => person.login.uuid !== id));
  };

  return (
    <>
      <h1>Générateur de noms</h1>
      <fieldset>
        <label>
          <input type="radio" name="display-mode" value="cards" /> Cartes
        </label>
        <label>
          <input type="radio" name="display-mode" value="csv" /> CSV
        </label>
      </fieldset>
      <button onClick={addNewPerson}>Nouvelle personne</button>
      <div className="Card-grid">
        {persons.map((person) => {
          return (
            <PersonCard
              key={person.login.uuid}
              id={person.login.uuid}
              firstName={person.name.first}
              lastName={person.name.last}
              gender={person.gender}
              dateOfBirth={person.dob.date}
              imageUrl={person.picture.large}
              onDelete={deletePerson}
            />
          );
        })}
      </div>
    </>
  );
};

export default NameGenerator;
