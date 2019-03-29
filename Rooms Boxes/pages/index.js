import React from "react";
import Rooms from "../components/Rooms";

const Index = () => {
  return (
    <div className="container">
      <Rooms />
      <style jsx>
        {`
          .container {
            width: 80%;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
