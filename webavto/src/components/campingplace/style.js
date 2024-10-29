import styled from "styled-components";
import campback from "../../assets/campback.svg";

export const Campcontainer = styled.div`
  width: 100%;
  background-image: url(${campback});
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  height: 350px;
  border:1px solid black;

  text-align: center;
  padding-top: 97px;
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 13px;
  }
  h1 {
    color: #fff;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const CampGridCon = styled.div`
  padding: 80px;
  display:grid;
  grid-template-columns: auto auto auto;
  justify-content:center;
  gap:20px;
  @media only screen and (max-width: 1350px) {
    grid-template-columns: auto auto;
    justify-content:center;
  }
  @media only screen and (max-width: 1350px) {
    grid-template-columns: auto;
  }
`;

export const CampGrid = styled.div`
  width: 395px;
  h3 {
    color: var(--text, #373737);
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top:15px;
  }
  h4 {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:5px;
  }
`;

export const CampGridImg = styled.img`
  width: 395px;
  height: 300px;
  border-radius: 10px;
`;
