import React from 'react'
import { GridBox, GridBoxContainer, GridBoxText, GridBtn, GridBtnCont, GridBtnTab, GridContainer } from '../../motor/motormiddle/style';
import { usedcarcampcar } from '../usedcarfake';
import Starimg from "../../../assets/bxsstar.svg";

const HmenuUsedcar = () => {
    const tuningdata = usedcarcampcar.maindata;
  return (
    <GridContainer>
    {tuningdata.map((value, index) => {
      return (
        <GridBoxContainer>
          <GridBox key={index}>
            <img
              className="CarImage"
              src={value.car.photo}
              alt="Car1-Image"
            />
            <p>{value.car.name}</p>
            <GridBoxText>
              <p>{value.car.company}</p>
              <div>
                <img src={Starimg} alt="" />
                <p>{value.car.rate}</p>
              </div>
            </GridBoxText>
            <h3>{value.car.cost}</h3>
            <GridBtnCont>
              <GridBtnTab $whitecol>ORDER</GridBtnTab>
              <GridBtnTab>VIEW DETAIL</GridBtnTab>
              <GridBtn>Order</GridBtn>
              <GridBtn>Compare</GridBtn>
            </GridBtnCont>
          </GridBox>
        </GridBoxContainer>
      );
    })}
  </GridContainer>
  )
}

export default HmenuUsedcar