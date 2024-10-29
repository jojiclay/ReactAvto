import React from "react";
import {
  CarContainerCarusel,
  CarContainerText,
  CarLeftBtn,
  CarLeftBtnCon,
  CarNameCon,
  ContinueCartBtn,
  ContinueCartCon,
  Inpt,
  IntContainer,
  Recomend,
  RecomendText,
  WrapperContainerCart,
} from "./CartWrapper";

import CartImg1 from "../../assets/cartimg1.svg";
import CartImg2 from "../../assets/cartimg1.svg";
import CartImg3 from "../../assets/cartimg1.svg";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useParams } from "react-router-dom";
import { gridcampcar } from "../../Gridpage/gridfake";

const CartWrapper = () => {
  const { id } = useParams();
  const gridData = gridcampcar.maindata;
  const filteredData = gridData.filter((value) => value.id === parseInt(id));
  return (
    <div>
      {filteredData.map((value, index) => {
        return (
          <div>
            <Recomend>
              <RecomendText>Cart</RecomendText>
            </Recomend>
            <WrapperContainerCart key={index}>
              <CarContainerCarusel>
                <CCarousel controls>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src={CartImg1}
                      alt="slide 1"
                    />
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src={CartImg2}
                      alt="slide 2"
                    />
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src={CartImg3}
                      alt="slide 3"
                    />
                  </CCarouselItem>
                </CCarousel>
                <CarLeftBtnCon>
                  <CarLeftBtn>
                    Purchase price <label>{value.car.cost}</label>{" "}
                  </CarLeftBtn>
                </CarLeftBtnCon>
              </CarContainerCarusel>
              <CarContainerText>
                <CarNameCon>
                  <h2>{value.car.name}</h2>
                  <label>{value.car.cost}</label>
                </CarNameCon>
                <h3 className="Description">Description</h3>
                <p className="LorIpsum">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat viverra amet, tortor tristique odio scelerisque aenean
                  sodales. Nunc risus dolor amet porttitor tellus
                </p>
                <ContinueCartCon>
                  <ContinueCartBtn>Continue to payment</ContinueCartBtn>
                </ContinueCartCon>
                <IntContainer>
                  <h3>Enter Account Details</h3>
                  <div>
                    <label>First Name</label>
                    <Inpt placeholder="First name" />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <Inpt placeholder="Last name" />
                  </div>
                  <div>
                    <label>Email</label>
                    <Inpt placeholder="Email" />
                  </div>
                  <div>
                    <label>Mobile Phone Number</label>
                    <Inpt placeholder="Mobile Phone Number" type="number" />
                  </div>
                </IntContainer>
                <IntContainer>
                  <h3>Card</h3>
                  <div>
                    <label>Name on card</label>
                    <Inpt placeholder="Name on card" type="number" />
                  </div>
                  <div>
                    <label>Card Number</label>
                    <Inpt placeholder="Card Number" type="number" />
                  </div>
                  <div>
                    <label>Expiration Month</label>
                    <Inpt placeholder="01" />
                  </div>
                  <div>
                    <label>Expiration Year</label>
                    <Inpt placeholder="2024" type="number" />
                  </div>
                  <div>
                    <label>CVV</label>
                    <Inpt placeholder="CVV" />
                  </div>
                  <div>
                    <label>Billing Zip Cod</label>
                    <Inpt placeholder="Billing Zip Cod" />
                  </div>
                </IntContainer>
                <ContinueCartBtn> Place Order</ContinueCartBtn>
              </CarContainerText>
            </WrapperContainerCart>
          </div>
        );
      })}
    </div>
  );
};

export default CartWrapper;
