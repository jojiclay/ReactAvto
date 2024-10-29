import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: var(--blue, #006dab);
  padding: 50px 0 126px 71px;
  @media only screen and (max-width: 850px) {
    padding: 50px 80px;
  }
  @media only screen and (max-width: 500px) {
    padding: 50px 50px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  .FootCam {
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
  }
  @media only screen and (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    gap:25px;
  }
`;

export const FooterMenuA = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 40px;
    cursor: pointer;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  img {
    cursor: pointer;
  }
`;

export const FooterMobIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  display: none;
  @media only screen and (max-width: 850px) {
    display: block;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-top:15px;
  }
`;
