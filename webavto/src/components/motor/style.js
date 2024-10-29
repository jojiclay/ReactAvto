import styled from "styled-components";
import backimg from "../../assets/backimg.svg";

export const MotoContainer = styled.div`
  background-image: url(${backimg});
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 350px;
  text-align: center;
  padding-top: 97px;
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom:13px;
  }
  h3 {
    color: #fff;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h1 {
    color: #fff;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
