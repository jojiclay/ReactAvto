import styled from "styled-components";

export const Recomend = styled.div`
  display: flex;
  justify-content: center;
`;
export const RecomendText = styled.div`
  color: var(--text, #373737);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-bottom: 3px solid #ff7a00;
  padding-bottom: 10px;
  text-align: center;
  width: 100px;
`;

export const WrapperContainerCart = styled.div`
  padding: 50px 70px;
  display: flex;
  gap: 45px;
  @media only screen and (max-width: 1300px) {
    flex-direction:column;
    align-items:center;
  }
  @media only screen and (max-width: 850px) {
    padding: 30px 70px;
  }
`;

export const CarContainerCarusel = styled.div`
width:820px;
display:flex;
flex-direction:column;
align-items:center;
  height: 470px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  .d-block {
    width:80%;
    height: 406px;
    @media only screen and (max-width: 850px) {
      height:200px;
  }
  }
  @media only screen and (max-width: 850px) {
    width:350px;
    height: 260px;
  }
`;

export const CarLeftBtn = styled.button`
  width: 350px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  color: var(--text, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  label {
    color: #373737;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &:hover {
    border: 1px solid black;
  }
  @media only screen and (max-width: 850px) {
    width:340px;
  }
`;
export const CarLeftBtnCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarContainerText = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 350px;
  overflow:scroll;
  overflow-x:hidden;
  height:600px;
  padding: 0 10px;
  .Description {
    color: #373737;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .LorIpsum {
    color: rgba(55, 55, 55, 0.7);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @media only screen and (max-width: 1300px) {
   width:670px;
  }
  @media only screen and (max-width: 850px) {
    width:380px;
  }

`;
export const CarNameCon = styled.div`
  h2 {
    color: var(--text, #373737);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  label {
    color: var(--blue, #006dab);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 12px 0 20px 0;
  }
  @media only screen and (max-width: 1300px) {
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
`;



export const ContinueCartCon = styled.div`
padding-top:170px;
@media only screen and (max-width: 1300px) {
  padding-top:70px;
  }
`

export const ContinueCartBtn = styled.button`
width: 311px;
height: 45px;
border-radius: 10px;
background: var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
border:none;
cursor: pointer;
&:hover{
  background: #0044ab;
}
@media only screen and (max-width: 1300px) {
   width:650px;
  }
  @media only screen and (max-width: 850px) {
    width:370px;
  }
`

export const IntContainer = styled.div`
  h3{
    color: #000;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
  }
  label{
    color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin:20px 0  10px 0;
  }
  padding: 50px 0;
`

export const Inpt = styled.input`
height: 50px;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
color: rgba(55, 55, 55, 0.60);
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 400;
width:100%;
line-height: normal;
padding:15px 0 15px 20px;
border:none;
`
