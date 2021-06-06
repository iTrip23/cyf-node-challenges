import React from "react";
import InfoCard from "./InfoCard";
const InfoCardContainer = ({ boroughInfo }) => {
  return (
    <div className="info-card-container">
      {boroughInfo &&
        boroughInfo.map((elem, index) => <InfoCard info={elem} key={index} />)}
    </div>
  );
};

export default InfoCardContainer;
