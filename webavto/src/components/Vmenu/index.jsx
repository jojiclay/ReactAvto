import React from "react";
import Starimg from "../../assets/bxsstar.svg";
import {
  CostCon,
  GorBtn,
  GorBtnCon,
  GorGidText,
  GorGrid,
  GorizaltalContainer,
  Gorizongridcon,
  VCarImg,
} from "./style";
import { campcar } from "../../moob/fake.js";
import { Link } from "react-router-dom";

const VmenuComponents = () => {
  const data = campcar.maindata;
  return (
    <GorizaltalContainer>
      {data.map((value, index) => {
        return (
          <Gorizongridcon>
            <Link to={`/motor/${value.id}`} style={{ textDecoration: "none" }}>
            <GorGrid key={index}>
              <VCarImg><img src={value.car.photo} alt="CAr-Image" /></VCarImg>
              <GorGidText>
                <div>
                  <h1>{value.car.name}</h1> <p>{value.car.cost}</p>
                </div>
                <div>
                  <h2>{value.car.company}</h2>
                  <CostCon>
                    <img src={Starimg} alt="Star" />
                    <h4>{value.car.rate}</h4>
                  </CostCon>
                </div>
                <GorBtnCon>
                  <GorBtn>Order</GorBtn>
                  <GorBtn>Сompare</GorBtn>
                </GorBtnCon>
              </GorGidText>
            </GorGrid>
            </Link>
          </Gorizongridcon>
        );
      })}
    </GorizaltalContainer>
  );
};

export default VmenuComponents;
