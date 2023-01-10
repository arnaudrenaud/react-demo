import React, { useState } from "react";

const NameGenerator = () => {
  const [persons, setPersons] = useState([]);

  const addNewPerson = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();

    const newPerson = result.results[0];
    setPersons(persons.concat([newPerson]));
  };

  return (
    <>
      <h1>Générateur de noms</h1>
      <button onClick={addNewPerson}>Nouvelle personne</button>
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => {
            return (
              <tr key={person.login.uuid}>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default NameGenerator;
