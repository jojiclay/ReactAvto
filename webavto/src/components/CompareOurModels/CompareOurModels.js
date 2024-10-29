import styled from "styled-components";

export const CompareOurTExt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 80px;
  .PlusAddModel {
    display: flex;
    align-items: center;
    gap: 10px;
    div {
      width: 34px;
      height: 34px;
      border: 2px solid black;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--text, #373737);
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      cursor: pointer;
    }
    label {
        color: var(--text, #373737);
        font-size: 21px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
  }
  h1 {
    color: var(--text, #373737);
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ModelsGridContainer = styled.div`
padding:80px;
display:grid;
grid-template-columns: auto auto auto;
justify-content:center;
gap:30px;
`
export const ModelsGrid = styled.div`

  .NameOfCar{
    color: #000;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin:10px 0 25px 0;
  }
`

export const ModelsImgContainer = styled.div`
width: 395px;
height: 198px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display:flex;
align-items:center;
justify-content:center;
img{
    width: 289.452px;
height: 173.198px;
}
`

export const AcardionName = styled.div`
    
`

export const AcardionCon = styled.div`
    width:100%;
    border-bottom:1px solid black;
    margin-bottom:4px;
    background-color:none !important;
`

export const ModelsBtnContainer = styled.div`

`

export const ModelsBtn = styled.button`
width: 100%;
height: 50px;
border-radius: 10px;
border: 2px solid var(--blue, #006DAB);
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #006DAB;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color:white;
margin-top:30px;
`