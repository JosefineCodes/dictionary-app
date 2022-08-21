import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} tatget="_blank">
        {" "}
        Listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
