import React from "react";
import {
  CardBtn,
  CardBtnCon,
  CardContainer,
  GridBtnCon,
  HeatingBtn,
  InfoWrapImg,
  InfoWrapText,
  InfoWrapper,
  Linerex,
  WrapperCard,
  WrapperCardContainer,
  WrapperCardFoto,
  WrapperCardText,
} from "./style";
import { gridcampcar } from "./gridfake";
import { Link, useParams } from "react-router-dom";
import BasicTabs from "../components/change";

const GridPageComponents = () => {
  const { id } = useParams();
  const gridData = gridcampcar.maindata;
  const filteredData = gridData.filter((value) => value.id === parseInt(id));
  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div>
            <CardContainer key={index}>
              <h2>{value.car.name}</h2>
              <CardBtnCon>
                <CardBtnCon>
                  <CardBtn $bluebtn>ADD TO CART</CardBtn>
                  <CardBtn>COMPARE</CardBtn>
                </CardBtnCon>
              </CardBtnCon>
            </CardContainer>
            <InfoWrapper>
              <InfoWrapImg src={value.photo} alt="Pustoy" />
              <InfoWrapText>
                <div>
                  <h1>{value.car.name}</h1>
                  <h2>{value.car.cost}</h2>
                </div>
                <p>aid</p>
                <Linerex></Linerex>
                <div className="company">
                  <h3>Company</h3>
                  <h4>{value.car.company}</h4>
                </div>
                <div className="company">
                  <h3>People</h3>
                  <h4>{value.car.people}</h4>
                </div>
                <div className="company">
                  <h3>License type</h3>
                  <h4>{value.car.license}</h4>
                </div>
              </InfoWrapText>
            </InfoWrapper>
           <WrapperCardContainer>
              <WrapperCard>
                <WrapperCardText>
                 <div className="Hide">
                    <h1>Comfort</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum nibh urna sagittis arcu natoque lectus cursus felis.
                      Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac
                      ut metus, amet, pulvinar. Eget amet dictum luctus quis
                      molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus
                      cursus felis. Nec, felis risus, id in proin sed proin iaculis
                      mi.
                    </p>
                 </div>
                </WrapperCardText>
                <WrapperCardFoto><img src={value.photo1} alt="Inside-Image" /></WrapperCardFoto>
              </WrapperCard>
              <WrapperCard>
              <div className="Hide"><WrapperCardFoto><img src={value.photo2} alt="Inside-Image" /></WrapperCardFoto></div>
                <WrapperCardText>
                <div className="Hide">
                    <h1>Tidying away is child’s play!</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum nibh urna sagittis arcu natoque lectus cursus felis.
                      Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac
                      ut metus, amet, pulvinar. Eget amet dictum luctus quis
                      molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus
                      cursus felis. Nec, felis risus, id in proin sed proin iaculis
                      mi.
                    </p>
                </div>
                </WrapperCardText>
              </WrapperCard>
              <WrapperCard>
                <WrapperCardText>
                  <h1>Ventilated , Lit up</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Rutrum nibh urna sagittis arcu natoque lectus cursus felis.
                    Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac
                    ut metus, amet, pulvinar. Eget amet dictum luctus quis
                    molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus
                    cursus felis. Nec, felis risus, id in proin sed proin iaculis
                    mi.
                  </p>
                </WrapperCardText>
                <WrapperCardFoto><img src={value.photo3} alt="Inside-Image" /></WrapperCardFoto>
              </WrapperCard>
              <WrapperCard>
              <div className="HidePC">
                <WrapperCardText>
                    <h1>Ventilated , Lit up</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum nibh urna sagittis arcu natoque lectus cursus felis.
                      Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac
                      ut metus, amet, pulvinar. Eget amet dictum luctus quis
                      molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus
                      cursus felis. Nec, felis risus, id in proin sed proin iaculis
                      mi.
                    </p>        
                  </WrapperCardText>
              </div>
              <WrapperCardFoto><img src={value.photo5} alt="Inside-Image" /></WrapperCardFoto>
                <WrapperCardText>  
                   <div className="Hide">
                      <h1>Easy access</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Rutrum nibh urna sagittis arcu natoque lectus cursus felis.
                        Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac
                        ut metus, amet, pulvinar. Eget amet dictum luctus quis
                        molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus
                        cursus felis. Nec, felis risus, id in proin sed proin iaculis
                        mi.
                      </p>
                   </div>
                </WrapperCardText>
              </WrapperCard>
              <WrapperCard>
                <WrapperCardText>
                  <h1>Heating when driving</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Rutrum nibh urna sagittis arcu natoque lectus cursus felis.
                    Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac
                    ut metus, amet, pulvinar. Eget amet dictum luctus quis
                    molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus
                    cursus felis. Nec, felis risus, id in proin sed proin iaculis
                    mi.
                  </p>
                  <GridBtnCon>
                   <Link to={`/cart/${value.id}`} style={{ textDecoration: "none" }}> <HeatingBtn $heatbtn>ADD TO CART</HeatingBtn></Link>
                    <HeatingBtn>COMPARE</HeatingBtn>
                  </GridBtnCon>
                </WrapperCardText>
                <div className="Hide"><WrapperCardFoto><img src={value.photo4} alt="Inside-Image" /></WrapperCardFoto></div>
              </WrapperCard>
           </WrapperCardContainer>
           <BasicTabs></BasicTabs>
          </div>
        );
      })}
    </div>
  );
};

export default GridPageComponents;
