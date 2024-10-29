import React from "react";
import { CampGrid, CampGridCon, CampGridImg, Campcontainer } from "./style";
import { campingplacecampcar } from "./campingfake";
import { Link } from "react-router-dom";

const CampingPlaceComponents = () => {
  const campingPlaceData = campingplacecampcar.maindata;
  return (
    <div>
      <Campcontainer>
        <p>Home / Camping place</p>
        <h1>Camping places</h1>
      </Campcontainer>
     <Link to={"/camping"} style={{ textDecoration: "none" }}>
        <CampGridCon>
          {campingPlaceData.map((value, index) => {
            return (
              <CampGrid key={index}>
                <CampGridImg src={value.car.photo} />
                <h3>{value.car.company}</h3>
                <h4>{value.car.location}</h4>
              </CampGrid>
            );
          })}
        </CampGridCon>
     </Link>
    </div>
  );
};

export default CampingPlaceComponents;
