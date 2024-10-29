import styled from "styled-components";

export const SignPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const SignContainer = styled.div`
  width: 500px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 50px 33px;
`;

export const InpContainer = styled.div`
  padding-top: 37px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 434px;
  height: 50px;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.1);
  padding: 15px 0 15px 20px;
  border: none;
  color: rgba(55, 55, 55, 0.6);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InpContainerTwo = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ForgetPassCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:15px;
  div {
    display: flex;
    gap: 5px;
  }
  .ChekBox {
    width: 23px;
    height: 22px;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.25);
    cursor: pointer;
  }
  p{
    color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
`;

export const Forget = styled.a`
  color: #373737;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;

export const SignBtn = styled.button`
width: 434px;
height: 50px;
border-radius: 10px;
background: var(--blue, #006DAB);
color: #FFF;
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
border:none;
cursor: pointer;
margin-top:27px;
&:hover{
    background-color:white;
    color: var(--blue, #006DAB);
    border:1px solid var(--blue, #006DAB);
}
`

export const LinerContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:20px 0;
gap:10px;
label{
    color: #6D6D6D;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const Liner = styled.div`
width: 120px;
height: 1px;
background: rgba(55, 55, 55, 0.15);
`

export const WrapperIconCon = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:12px;
.nicon{
    width: 46px;
height: 46px;
background-color:#039600;
border-radius:50px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
}
.gicon{
    width: 46px;
height: 46px;
background-color:#BC0000;
border-radius:50px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
}
.talkicon{
    width: 46px;
height: 46px;
background-color:#FFC700;
border-radius:50px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
}
`
export const WrapIconImg = styled.img`

`

export const CreateBtn = styled.button`
width: 434px;
height: 50px;
border-radius: 10px;
background: white;
color: #006DAB;
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
border:none;
cursor: pointer;
border:1px solid var(--blue, #006DAB);
margin-top:27px;
&:hover{
    background-color:#006DAB;
    color: #fff;
    
}
`