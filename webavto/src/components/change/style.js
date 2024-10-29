import styled from "@emotion/styled";

export const ItemReviewsContainer = styled.div`
  padding: 45px 60px;
`;

export const PremiumRewievText = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: var(--text, #373737);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  label {
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const BestSelect = styled.select`
  cursor: pointer;
  width: 177px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid rgba(55, 55, 55, 0.3);
  background: #fff;
  color: var(--blue, #006dab);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  padding: 0 10px 0 10px;
`;

export const ItemReviewsCartCon = styled.div`
  padding: 37px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ItemReviewsCart = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartImgText = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  img {
    width: 195px;
    height: 100px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  div {
    h4 {
      color: var(--text, #373737);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    h3 {
      color: rgba(55, 55, 55, 0.8);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    p {
      color: #373737;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const CartText = styled.div`
  margin-right: 60px;
  p {
    color: rgba(55, 55, 55, 0.7);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  label {
    color: #373737;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const QuestionConLeft = styled.div`
  width: 707px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
    p {
      color: rgba(55, 55, 55, 0.5);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    h3 {
      color: #373737;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export const QuestionConRight = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
  height: 410px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 109, 171, 0.1);
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 30px;
  h2 {
    color: var(--text-color, #023047);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
    text-align: center;
  }
`;

export const QuestionConRightInput = styled.input`
  width: 390px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--text, rgb(245, 245, 245));
  background: rgb(245, 245, 245);
  color: rgba(55, 55, 55, 0.7);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  padding-left: 16px;
`;

export const TextAreas = styled.textarea`
  border: 1px solid var(--text, rgb(245, 245, 245));
  background: rgb(245, 245, 245);
  color: rgba(55, 55, 55, 0.7);
  width: 390px;
  height: 120px;
  border-radius: 8px;
  padding: 16px 0 0 16px;
`;

export const SendQuestionBtn = styled.button`
  height: 50px;
  border-radius: 10px;
  background: var(--blue, #006dab);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  border: none;
  margin-top: 15px;
`;

export const FaqContainer = styled.div`
display:flex;
justify-content:space-between;
`;
export const FaqContainerLeft = styled.div`
  width: 720px;
`;

export const ContactContainer = styled.div`
display:flex;
justify-content:space-between;
`;

export const ContactContainerLeft = styled.div`

`
export const ContactMiniCartCon = styled.div`
display:flex;
gap:33px;
padding-top:25px;
`

export const ContactMiniCart = styled.div`
width: 335px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
padding:15px 0 0 25px;
p{
    color: #666;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
h4{
    color: var(--txt-color, #1E1C1C);
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%;
}
a{
    color: var(--txt-color, #1E1C1C);
text-decoration:none;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`


