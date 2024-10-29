import styled from "styled-components";

export const CampingContainer = styled.div`
  padding: 50px 60px;
  @media only screen and (max-width: 500px) {
      padding:25px 60px;
    }
`;

export const CardImgCon = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  img {
    width: 200px;
    height: 160px;
    @media only screen and (max-width: 500px) {
      width:180px;
    }
  }
  .Nonee {
    @media only screen and (max-width: 1350px) {
      display: none;
    }
  }
  .Non {
    @media only screen and (max-width: 950px) {
      display: none;
    }
  }
`;

export const CampDelSolText = styled.div`
  padding-top: 20px;
  h1 {
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const LocAndButtonCon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 25px;
`;
export const BtnCamping = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid var(--sariq, #ff7a00);
  color: var(--sariq, #ff7a00);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  background-color: white;
`;
export const Location = styled.div`
  color: var(--blue, #006dab);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const WrapperInfoCon = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 100px;
`;

export const WrapperInfOne = styled.div`
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 18px;
    p {
      color: var(--text, #373737);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const WrapperInfoTwo = styled.div`
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 18px;
    p {
      color: var(--text, #373737);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    label {
      color: var(--sariq, #ff7a00);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    h4 {
      color: var(--blue, #006dab);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
    }
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: var(--blue, #006dab);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 22px;
  }
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
`;

export const MapsCartImg = styled.img`
  width: 100%;
  height: 550px;
  margin-top: 50px;
  @media only screen and (max-width: 920px) {
    height: 450px;
  }
`;
