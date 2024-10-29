import React from 'react'
import { campcar } from '../../moob/fake';
import { GridBox, GridBoxContainer, GridBoxText, GridBtn, GridBtnCont, GridBtnTab, GridContainer } from '../motor/motormiddle/style';
import { Link } from 'react-router-dom';
import Starimg from "../../assets/bxsstar.svg"

const Hmenu = () => {
    const data = campcar.maindata;
  return (
    <GridContainer>
    {data.map((value, index) => {
      return (
        <GridBoxContainer>
          <GridBox key={index}>
            <Link to={`/motor/${value.id}`} style={{ textDecoration: "none" }}>
              <img
                className="CarImage"
                src={value.car.photo}
                alt="Car1-Image"
              />
              <p>{value.car.name}</p>
              <GridBoxText>
                <p>{value.car.company}</p>
                <div>
                  <img src={Starimg} alt="star" />
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
            </Link>
          </GridBox>
        </GridBoxContainer>
      );
    })}
  </GridContainer>
  )
}

export default Hmenu