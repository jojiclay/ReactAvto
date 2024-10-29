import styled from "styled-components";

export const MiddelContainer = styled.div`
  display: flex;
  padding: 60px 70px 70px 70px;
  gap: 30px;
  @media only screen and (max-width: 1150px) {
    padding: 60px 40px;
  }
  @media only screen and (max-width: 500px) {
    padding: 60px 10px;
  }
`;

export const MiddelLeft = styled.div`
  flex: 1;
  .fromint {
    width: 91px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.6);
  }
  @media only screen and (max-width: 1320px) {
    display: none;
  }
`;
export const LeftLiner = styled.div`
  background: rgba(55, 55, 55, 0.3);
  height: 1px;
  width: 240px;
  margin-top: 11px;
`;
export const Containerint = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 30px;
`;
export const FromInt = styled.div`
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;

export const Leftbox = styled.div``;

export const LeftBoxText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  max-width: 240px;
`;

export const ForGroupForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 10px;
  .checkinput {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  label {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonLeft = styled.button`
  width: 114px;
  height: 39px;
  border-radius: 60px;
  background-color: ${(props) => (props.$second ? "#006DAB" : "#FF7A00")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  margin-top: 55px;
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CompareContainer = styled.div`
  padding-top: 50px;
  h1 {
    color: var(--blue, #006dab);
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 7px;
  }
`;
export const CompareBoxCon = styled.div`
  display: flex;
  gap: 5px;
`;
export const CompareBox = styled.div`
  width: 75px;
  height: 90px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70px;
    height: 58px;
  }
`;

export const MiddelRight = styled.div`
  flex: 4;
  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MiddelRightText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }
  label {
    margin-left: 10px;
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: start;
    gap: 37px;
  }
`;

export const MiddleSortByCon = styled.div`
  display: flex;
  align-items:center;
  gap: 15px;
`;

export const SortBy = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 10px;
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
  .SelectInt {
    width: 227px;
    height: 30px;
    border-radius: 5px 0 0 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    border-right: 0px;
    color: rgba(55, 55, 55, 0.6);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    padding-left: 10px;
    @media only screen and (max-width: 850px) {
      width: 170px;
    }
  }
  .IconNext {
    width: 30px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
export const WrapperInt = styled.div`
  display: flex;
  align-items: center;

  .MiniSelect {
    width: 50px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px 0 0 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    padding-left: 11px;
    border-right: 0px;
  }
  .IconNext {
    width: 30px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  .Gridicon {
    width: 41px;
    height: 30px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    border-right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .Viewlist {
    width: 41px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const RightLiner = styled.div`
  background: rgba(55, 55, 55, 0.3);
  height: 1px;
  width: 100%;
  margin-top: 10px;
`;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  padding-top: 37px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: auto auto;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: auto;
  }
`;

export const GridBoxContainer = styled.div`
  width: 223px;
  height: 315px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 15px 10px;

  @media only screen and (max-width: 1050px) {
    display: ${(props) => (props.$gridnone ? "none" : "block")};
  }
  @media only screen and (max-width: 1050px) {
    width: 327px;
    height: 430px;
    padding: 40px 28px;
  }
  @media only screen and (max-width: 750px) {
    width: 370px;
    height: 430px;
    padding: 40px;
  }
`;

export const GridBox = styled.div`
  .CarImage {
    width: 190px;
    height: 136px;
    border-radius: 20px;
  }
  p {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h3 {
    color: var(--blue, #006dab);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media only screen and (max-width: 1050px) {
    .CarImage {
      width: 272px;
      height: 180px;
    }
    p {
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-top: 10px;
    }
    h3 {
      margin-top: 20px;
    }
  }
`;

export const GridBoxText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    img{
      width:15px;
      height:15px;
    }
    display:flex;
    justify-content:center;
  }
`;
export const GridBtnCont = styled.div`
  display: flex;
  gap: 15px;
  @media only screen and (max-width: 1050px) {
    padding-top: 30px;
  }
`;

export const GridBtn = styled.button`
  width: 94px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: var(--blue, #006dab);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: white;
  cursor: pointer;
  &:hover {
    background: var(--blue, #006dab);
    color: #fff;
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;

export const GridBtnTab = styled.div`
  width: 140px;
  height: 45px;
  border-radius: 10px;
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  padding-top: 12px;
  background-color: ${(props) => (props.$whitecol ? "#006DAB" : "white")};
  color: ${(props) => (props.$whitecol ? "white" : "#006DAB")};
  display: none;
  @media only screen and (max-width: 1050px) {
    display: block;
  }
`;
