import styled from "styled-components";

export const GorizaltalContainer = styled.div`
padding: 40px 0 ;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const Gorizongridcon = styled.div`
  width: 955px;
  height: 180px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 18px;
  margin-bottom: 15px;
  @media only screen and (max-width: 1050px) {
    width: 674px;
  }
  @media only screen and (max-width: 750px) {
    width: 370px;
  }  
  `;

export const GorGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:30px;
`;

export const VCarImg = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
width:280px;
height:150px;
img{
  width:100%;
  height:150px;
  border-radius:10px;
  @media only screen and (max-width: 750px) {
    height:90px;
} 
}
`

export const GorGidText = styled.div`
flex:2;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: var(--text, #373737);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom:5px;
      @media only screen and (max-width: 750px) {
    font-size:16px;
  } 
    }
    p {
      color: var(--blue, #006dab);
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media only screen and (max-width: 750px) {
    font-size:17px;
  }
    }
    h2 {
      color: var(--text, #373737);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom:40px;
      @media only screen and (max-width: 750px) {
        margin: 20px 0;
  }
    }
    h4 {
      color: var(--text, #373737);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const CostCon = styled.div`
display:flex;
img{
    @media only screen and (max-width: 750px) {
    width:15px;
    height:15px;
  }
  }
`;

export const GorBtnCon = styled.div`
  display: flex;
  gap:15px;
`;

export const GorBtn = styled.button`
width: 292px;
height: 35px;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
background-color:white;
color: var(--blue, #006DAB);
font-size: 14px;
font-style: normal;
font-weight: 700;
cursor: pointer;
&:hover{
  background-color:#006DAB;
  color:white;
}

@media only screen and (max-width: 1050px) {
    width: 150px;
  } 
  @media only screen and (max-width: 750px) {
    width: 102px;
    height: 30px;
  } 
`;
