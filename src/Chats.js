import React from "react";
import Chat from "./Chat";
import "./Chats.css";

export default function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Craig"
        message="Dean Dean Dean! Would you like a jar of olives?"
        timeStamp="40 seconds ago"
        profilePic="https://vignette.wikia.nocookie.net/community-sitcom/images/1/1c/Pelton_Season_Three.jpg/revision/latest?cb=20140123184957"
      />
      <Chat
        name="Britta"
        message="PIZZA! Pizza, Pizza, Go In Tummy, Me So Hungee, Me So Hungee!"
        timeStamp="20 seconds ago"
        profilePic="https://vignette.wikia.nocookie.net/community-sitcom/images/3/39/443851-community_s2_gillian_jacobs_001.jpg/revision/latest?cb=20130227232509"
      />
      <Chat
        name="Annie"
        message="Back in Corpus Christi they call me 'Capricious Caroline'!"
        timeStamp="3 minutes ago"
        profilePic="https://vignette.wikia.nocookie.net/community-sitcom/images/5/53/Annie_composite_edited-1.jpg/revision/latest?cb=20130221154451"
      />
    </div>
  );
}
