import React from "react";
import {
  BtnCamping,
  CampDelSolText,
  CampingContainer,
  CardImgCon,
  InfoText,
  LocAndButtonCon,
  Location,
  MapsCartImg,
  WrapperInfOne,
  WrapperInfoCon,
  WrapperInfoTwo,
} from "./style";
import CImg1 from "../../../assets/campimg1.svg";
import CImg2 from "../../../assets/campimg2.svg";
import CImg3 from "../../../assets/campimg3.svg";
import LImg1 from "../../../assets/locationicon.svg";
import phimg from "../../../assets/phoneicon.svg";
import housimg from "../../../assets/houseicon.svg";
import clockimg from "../../../assets/clockicon.svg";
import mapsimg from "../../../assets/gggggmaps.png";

const CampingPlacePage = () => {
  return (
    <CampingContainer>
      <CardImgCon>
        <img src={CImg1} alt="" />
        <img src={CImg2} alt="" />
        <img className="Nonee" src={CImg3} alt="" />
        <img className="Non" src={CImg3} alt="" />
        <img className="Nonee" src={CImg3} alt="" />
        <img className="Nonee" src={CImg3} alt="" />
      </CardImgCon>
      <CampDelSolText>
        <h1>Camping Del Sole Village</h1>
      </CampDelSolText>
      <LocAndButtonCon>
        <Location>Location</Location>
        <BtnCamping>Copy map</BtnCamping>
      </LocAndButtonCon>
      <WrapperInfoCon>
        <WrapperInfOne>
          <div>
            <img src={LImg1} alt="Location Image" />
            <p>Korea, Seul</p>
          </div>
          <div>
            <img src={phimg} alt="Phone Image" />
            <p>005- 862 -8569</p>
          </div>
        </WrapperInfOne>
        <WrapperInfoTwo>
          <div>
            <img src={clockimg} alt="Clocl img" />
            <p>
              from <label>11:00</label> to <label>19:00</label>
            </p>
          </div>
          <div>
            <img src={housimg} alt="House Image" />
            <h4>logo.com</h4>
          </div>
        </WrapperInfoTwo>
      </WrapperInfoCon>
      <InfoText>
        <h1>Description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
          senectus feugiat in vitae consequat libero placerat nascetur ultrices.
          Aenean mattis sapien a donec urna, bibendum. Maecenas mattis phasellus
          nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis
          bibendum convallis commodo enim.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sapien senectus feugiat in vitae
          consequat libero placerat nascetur ultrices. Aenean mattis sapien a
          donec urna, bibendum. Maecenas mattis phasellus nunc sed a fringilla
          risus. Aenean sed fusce pretium sit venenatis bibendum convallis
          commodo enim.
        </p>
      </InfoText>
      <MapsCartImg src= {mapsimg} alt="Google Map"/>
    </CampingContainer>
  );
};

export default CampingPlacePage;
