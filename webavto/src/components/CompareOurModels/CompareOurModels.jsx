import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MotoContainer } from "../motor/style";
import {
  AcardionCon,
  AcardionName,
  CompareOurTExt,
  ModelsBtn,
  ModelsBtnContainer,
  ModelsGrid, 
  ModelsGridContainer,
  ModelsImgContainer,
} from "./CompareOurModels";
import ModelsOurCarImg from "../../assets/ModelsOurCarImg.svg";

export default function AccordionUsage() {
  return (
    <div>
      <div>
        <MotoContainer>
          <p>Home / Motors / Compare</p>
          <h3>Compare our models</h3>
        </MotoContainer>
        <CompareOurTExt>
          <h1>Compare Models</h1>
          <div className="PlusAddModel">
            <div>+</div>
            <label>Add Model</label>
          </div>
        </CompareOurTExt>
        <ModelsGridContainer>
          <ModelsGrid>
            <ModelsImgContainer>
              <img src={ModelsOurCarImg} alt="" />
            </ModelsImgContainer>
            <h3 className="NameOfCar">Name of car</h3>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <ModelsBtnContainer>
              <ModelsBtn>Order</ModelsBtn>
            </ModelsBtnContainer>
          </ModelsGrid>
          <ModelsGrid>
            <ModelsImgContainer>
              <img src={ModelsOurCarImg} alt="" />
            </ModelsImgContainer>
            <h3 className="NameOfCar">Name of car</h3>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <ModelsBtnContainer>
              <ModelsBtn>Order</ModelsBtn>
            </ModelsBtnContainer>
          </ModelsGrid>
          <ModelsGrid>
            <ModelsImgContainer>
              <img src={ModelsOurCarImg} alt="" />
            </ModelsImgContainer>
            <h3 className="NameOfCar">Name of car</h3>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <AcardionCon>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <AcardionName>
                    <label>Model</label>
                  </AcardionName>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </AcardionCon>
            <ModelsBtnContainer>
              <ModelsBtn>Order</ModelsBtn>
            </ModelsBtnContainer>
          </ModelsGrid>
        </ModelsGridContainer>
      </div>
    </div>
  );
}
