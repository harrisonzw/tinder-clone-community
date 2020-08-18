import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./Firebase";
import "./TinderCards.css";

export default function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // this will run ONCE when the component loads

    database
      .collection("people")
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));
  }, [people]);

  return (
    <div className="cards-container">
      {people.map(person => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h1>{person.name}</h1>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
