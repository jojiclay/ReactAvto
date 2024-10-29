import React from 'react'
import { GridBox, GridBoxContainer, GridBoxText, GridBtn, GridBtnCont, GridBtnTab, GridContainer } from '../../motor/motormiddle/style';
import Starimg from "../../../assets/bxsstar.svg";
import { tuningcampcar } from '../tuningfake';
import { Link } from 'react-router-dom';


const IndexTuningHmenu = () => {
    const tuningdata = tuningcampcar.maindata;
  return (
    <GridContainer>
    {tuningdata.map((value, index) => {
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
            </Link>
          </GridBox>
        </GridBoxContainer>
      );
    })}
  </GridContainer>
  )
}

export default IndexTuningHmenu