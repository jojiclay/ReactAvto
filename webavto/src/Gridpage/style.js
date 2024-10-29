import styled from "styled-components";
import cardback from "../assets/cardback.svg";

export const CardContainer = styled.div`
  background-image: url(${cardback});
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 700px;
  padding-top: 97px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -130px;
  }
`;
export const CardBtnCon = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
export const CardBtn = styled.div`
  width: 181.5px;
  height: 50.014px;
  border-radius: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props) => (props.$bluebtn ? "#006DAB" : "")};
  border: ${(props) => (props.$bluebtn ? "" : "2px solid white")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$bluebtn ? "white" : "#006DAB")};
    color: ${(props) => (props.$bluebtn ? "#006DAB" : "white")};
    border: ${(props) => (props.$bluebtn ? "2px solid #006DAB" : "")};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 1290px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const InfoWrapImg = styled.img`
  width: 626px;
  height: 381px;
  @media only screen and (max-width: 660px) {
    width: 400px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`;
export const InfoWrapText = styled.div`
  width: 600px;
  height: 360px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 25px 0 25px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #000;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media only screen and (max-width: 660px) {
        font-size: 20px;
      }
    }
    h2 {
      color: #006dab;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media only screen and (max-width: 660px) {
        font-size: 25px;
      }
    }
  }
  .company {
    width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    h3 {
      color: var(--text, #373737);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    h4 {
      color: rgba(55, 55, 55, 0.8);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    @media only screen and (max-width: 660px) {
      width: 300px;
    }
  }
  @media only screen and (max-width: 660px) {
    width: 400px;
    height: 250px;
  }
  @media only screen and (max-width: 400px) {
    width: 350px;
    height: 220px;
  }
`;

export const Linerex = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
  margin-top: 10px;
`;

export const WrapperCardContainer = styled.div`
  padding: 80px 0;
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: var(--text, #373737);
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  }
  p {
    color: #373737;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .Hide {
    @media only screen and (max-width: 1290px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1290px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .HidePC{
    display:none;
    @media only screen and (max-width: 1290px) {
      display: block;
    }
  }
`;

export const WrapperCardText = styled.div`
  flex: 1;
  padding: 0px 80px;
  @media only screen and (max-width: 1290px) {
    width: 830px;
    margin-top: 21px;
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 850px) {
    width: 400px;
    margin-top: 0px;
    margin-bottom: 20px;
    padding: 0px 40px;
  }
`;
export const WrapperCardFoto = styled.div`
  flex: 1;
  img {
    width: 675px;
    height: 477px;
    @media only screen and (max-width: 850px) {
      width: 370px;
      height: 100%;
      border: 1px solid gray;
    }
  }
`;

export const GridBtnCon = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 60px;
`;

export const HeatingBtn = styled.div`
  width: 180px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => (props.$heatbtn ? "#006DAB" : "")};
  color: ${(props) => (props.$heatbtn ? "" : "#006DAB")};
  border: ${(props) => (props.$heatbtn ? "" : "2px solid #006DAB")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$heatbtn ? "white" : "#006DAB")};
    color: ${(props) => (props.$heatbtn ? "#006DAB" : "white")};
    border: ${(props) => (props.$heatbtn ? "2px solid #006DAB" : "")};
  }
`;
