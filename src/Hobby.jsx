import { useState } from "react";

const Hobby = ({ name }) => {
  return (
    <div className="hobby">
      <h1>My hobby is : {name}</h1>
    </div>
  );
};

export default Hobby;
