import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  BestSelect,
  CartImgText,
  CartText,
  ContactContainer,
  ContactContainerLeft,
  ContactMiniCart,
  ContactMiniCartCon,
  FaqContainer,
  FaqContainerLeft,
  ItemReviewsCart,
  ItemReviewsCartCon,
  ItemReviewsContainer,
  PremiumRewievText,
  QuestionConLeft,
  QuestionConRight,
  QuestionConRightInput,
  QuestionContainer,
  SendQuestionBtn,
  TextAreas,
} from "./style";
import itemsrewievCar from "../../assets/itemsrewievcar.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactMapFoto from "../../assets/ContactMapFoto.svg"
import emailjs from '@emailjs/browser';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const form = React.useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_msje6ui', 'template_kufz70g', form.current, {
  //       publicKey: '2pwXWIBIZlnBLs3te',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          background: "rgba(0, 109, 171, 0.20);",
          padding: "0 0 0 70px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ItemReviewsContainer>
          <PremiumRewievText>
            <div>
              <p>
                Premium Review <label>35</label>
              </p>
            </div>
            <div>
              <BestSelect>
                <option>Best</option>
                <option>Medium</option>
                <option>Puflo</option>
              </BestSelect>
            </div>
          </PremiumRewievText>
          <ItemReviewsCartCon>
            <ItemReviewsCart>
              <CartImgText>
                <div>
                  <img src={itemsrewievCar} alt="" />
                </div>
                <div>
                  <h4>Car Name</h4>
                  <h3>brand</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
              </CartImgText>
              <CartText>
                <p>
                  ID: <label>254</label>
                </p>
                <p>
                  Date: <label>22.02.2022</label>
                </p>
                <p>
                  Viewed: <label>135</label>
                </p>
              </CartText>
            </ItemReviewsCart>
            <ItemReviewsCart>
              <CartImgText>
                <div>
                  <img src={itemsrewievCar} alt="" />
                </div>
                <div>
                  <h4>Car Name</h4>
                  <h3>brand</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
              </CartImgText>
              <CartText>
                <p>
                  ID: <label>254</label>
                </p>
                <p>
                  Date: <label>22.02.2022</label>
                </p>
                <p>
                  Viewed: <label>135</label>
                </p>
              </CartText>
            </ItemReviewsCart>
            <ItemReviewsCart>
              <CartImgText>
                <div>
                  <img src={itemsrewievCar} alt="" />
                </div>
                <div>
                  <h4>Car Name</h4>
                  <h3>brand</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
              </CartImgText>
              <CartText>
                <p>
                  ID: <label>254</label>
                </p>
                <p>
                  Date: <label>22.02.2022</label>
                </p>
                <p>
                  Viewed: <label>135</label>
                </p>
              </CartText>
            </ItemReviewsCart>
            <ItemReviewsCart>
              <CartImgText>
                <div>
                  <img src={itemsrewievCar} alt="" />
                </div>
                <div>
                  <h4>Car Name</h4>
                  <h3>brand</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
              </CartImgText>
              <CartText>
                <p>
                  ID: <label>254</label>
                </p>
                <p>
                  Date: <label>22.02.2022</label>
                </p>
                <p>
                  Viewed: <label>135</label>
                </p>
              </CartText>
            </ItemReviewsCart>
            <ItemReviewsCart>
              <CartImgText>
                <div>
                  <img src={itemsrewievCar} alt="" />
                </div>
                <div>
                  <h4>Car Name</h4>
                  <h3>brand</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
              </CartImgText>
              <CartText>
                <p>
                  ID: <label>254</label>
                </p>
                <p>
                  Date: <label>22.02.2022</label>
                </p>
                <p>
                  Viewed: <label>135</label>
                </p>
              </CartText>
            </ItemReviewsCart>
            <ItemReviewsCart>
              <CartImgText>
                <div>
                  <img src={itemsrewievCar} alt="" />
                </div>
                <div>
                  <h4>Car Name</h4>
                  <h3>brand</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </div>
              </CartImgText>
              <CartText>
                <p>
                  ID: <label>254</label>
                </p>
                <p>
                  Date: <label>22.02.2022</label>
                </p>
                <p>
                  Viewed: <label>135</label>
                </p>
              </CartText>
            </ItemReviewsCart>
          </ItemReviewsCartCon>
        </ItemReviewsContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ItemReviewsContainer>
          <QuestionContainer>
            <QuestionConLeft>
              <div>
                <p>Name</p>
                <h3>Question Lorem ipsum dolor sit amet ?</h3>
              </div>
              <div>
                <p>Name</p>
                <h3>Question Lorem ipsum dolor sit amet ?</h3>
              </div>
              <div>
                <p>Name</p>
                <h3>Question Lorem ipsum dolor sit amet ?</h3>
              </div>
              <div>
                <p>Name</p>
                <h3>Question Lorem ipsum dolor sit amet ?</h3>
              </div>
              <div>
                <p>Name</p>
                <h3>Question Lorem ipsum dolor sit amet ?</h3>
              </div>
            </QuestionConLeft>
              <h2>Send a question</h2>
              <QuestionConRightInput placeholder="Your name" />
              <QuestionConRightInput placeholder="Your Email" />
              <TextAreas placeholder="Your question" />
              <SendQuestionBtn>Send question</SendQuestionBtn>
          </QuestionContainer>
        </ItemReviewsContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <ItemReviewsContainer>
            <FaqContainer>
              <FaqContainerLeft>
                <Accordion
                  sx={{ borderBottom: "1px solid rgba(55, 55, 55, 0.3)", marginBottom: "20px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Frequently asked questions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ borderBottom: "1px solid rgba(55, 55, 55, 0.3)", marginBottom: "20px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Frequently asked questions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ borderBottom: "1px solid rgba(55, 55, 55, 0.3)", marginBottom: "20px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Frequently asked questions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ borderBottom: "1px solid rgba(55, 55, 55, 0.3)", marginBottom: "20px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Frequently asked questions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ borderBottom: "1px solid rgba(55, 55, 55, 0.3)", marginBottom: "20px" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Frequently asked questions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ borderBottom: "1px solid rgba(55, 55, 55, 0.3)", }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Frequently asked questions
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionDetails>
                </Accordion>
              </FaqContainerLeft>
              <QuestionConRight>
                <h2>Send a question</h2>
                <QuestionConRightInput placeholder="Your name" />
                <QuestionConRightInput placeholder="Your Email" />
                <TextAreas placeholder="Your question" />
                <SendQuestionBtn>Send question</SendQuestionBtn>
              </QuestionConRight>
            </FaqContainer>
       </ItemReviewsContainer>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <ItemReviewsContainer>
        <ContactContainer>
            <ContactContainerLeft>
                <img src= {ContactMapFoto} alt="" />
                <ContactMiniCartCon>
                    <ContactMiniCart>
                        <p>Phone Number</p>
                        <h4>+7 237 181 181</h4>
                        <h4>+7 210 181 191</h4>
                    </ContactMiniCart>
                    <ContactMiniCart>
                        <p>E-mail:</p>
                        <a href="#">logo.uz</a>
                    </ContactMiniCart>
                </ContactMiniCartCon>
            </ContactContainerLeft>
        <QuestionConRight>
                <h2>Have you got a question</h2>
                <QuestionConRightInput placeholder="Your name" />
                <QuestionConRightInput placeholder="Your Email" />
                <TextAreas placeholder="Your question" />
                <SendQuestionBtn>Send question</SendQuestionBtn>
              </QuestionConRight>
        </ContactContainer>
      </ItemReviewsContainer>
      </CustomTabPanel>
    </Box>
  );
}
