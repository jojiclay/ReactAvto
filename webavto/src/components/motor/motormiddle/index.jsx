import {
  BtnContainer,
  ButtonLeft,
  CompareBox,
  CompareBoxCon,
  CompareContainer,
  Containerint,
  ForGroupForm,
  FromInt,
  LeftBoxText,
  LeftLiner,
  Leftbox,
  MenuWrapper,
  MiddelContainer,
  MiddelLeft,
  MiddelRight,
  MiddelRightText,
  MiddleSortByCon,
  RightLiner,
  SortBy,
  WrapperInt,
} from "./style";
import BtmImg from "../../../assets/bottom.svg";
import Car1 from "../../../assets/car1.svg";
import Car2 from "../../../assets/car2.svg";
import Car3 from "../../../assets/car3.svg";
import NextIcon from "../../../assets/iconsnext.svg";
import Gridicon from "../../../assets/gridicon.svg";
import Viewlist from "../../../assets/viewlist.svg";
import Hmenu from "../../Hmenu/hmenu.jsx"
import VmenuComponents from "../../Vmenu/index.jsx"
import { useState } from "react";
import { Link } from "react-router-dom";

const MotorMiddle = () => {
  const [display, setDisplay] = useState('hmenu')

  function changeDisplay (displayName){
    setDisplay(displayName);
  }

  return (
    <MiddelContainer>
      <MiddelLeft>
        <h3>Cost of car</h3>
        <LeftLiner></LeftLiner>
        <Containerint>
          <FromInt>
            <p>from</p>
            <input className="fromint" type="text" />
          </FromInt>
          <FromInt>
            <p>to</p>
            <input className="fromint" type="text" />
          </FromInt>
        </Containerint>
        <Leftbox>
          <LeftBoxText>
            <h3>Brand</h3>
            <img src={BtmImg} alt="assss" />
          </LeftBoxText>
          <LeftLiner></LeftLiner>
          <ForGroupForm>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>Aidal</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>Knal</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>escape</label>
            </div>
          </ForGroupForm>
        </Leftbox>
        <Leftbox>
          <LeftBoxText>
            <h3>Company</h3>
            <img src={BtmImg} alt="assss" />
          </LeftBoxText>
          <LeftLiner></LeftLiner>
          <ForGroupForm>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>escape</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>Aidal</label>
            </div>
          </ForGroupForm>
        </Leftbox>
        <Leftbox>
          <LeftBoxText>
            <h3>License type</h3>
            <img src={BtmImg} alt="assss" />
          </LeftBoxText>
          <LeftLiner></LeftLiner>
          <ForGroupForm>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>1 year</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>2 year</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>1.5year</label>
            </div>
          </ForGroupForm>
        </Leftbox>
        <Leftbox>
          <LeftBoxText>
            <h3>Number of travelers</h3>
            <img src={BtmImg} alt="assss" />
          </LeftBoxText>
          <LeftLiner></LeftLiner>
          <ForGroupForm>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>2</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>3-4</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>5+</label>
            </div>
          </ForGroupForm>
        </Leftbox>
        <Leftbox>
          <LeftBoxText>
            <h3>Location</h3>
            <img src={BtmImg} alt="assss" />
          </LeftBoxText>
          <LeftLiner></LeftLiner>
          <ForGroupForm>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>Seoul</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>Korea</label>
            </div>
            <div>
              <input className="checkinput" type="checkbox" />
              <label>Pusan</label>
            </div>
          </ForGroupForm>
        </Leftbox>
        <BtnContainer>
          <ButtonLeft>Cancel</ButtonLeft>
          <ButtonLeft $second>Search</ButtonLeft>
        </BtnContainer>
        <CompareContainer>
          <h1>Compare</h1>
          <CompareBoxCon>
            <CompareBox>
              <img src={Car1} alt="Car1-Image" />
            </CompareBox>
            <CompareBox>
              <img src={Car2} alt="Car2-Image" />
            </CompareBox>
            <CompareBox>
              <img className="Car3" src={Car3} alt="Car3-Image" />
            </CompareBox>
          </CompareBoxCon>
        </CompareContainer>
        <Link to={"/CampareOurModels"}><ButtonLeft $second>Compare</ButtonLeft></Link>
      </MiddelLeft>

      <MiddelRight>
        <div>
          <MiddelRightText>
            <div>
              <p>
                Item <label htmlFor="">25.156</label>
              </p>
            </div>
            <MiddleSortByCon>
              <SortBy>
                <h3>Sort by</h3>
                <input className="SelectInt" type="text" placeholder="Select" />
                <div className="IconNext">
                  <img src={NextIcon} alt="" />
                </div>
              </SortBy>
              <WrapperInt>
                <input className="MiniSelect" type="text" placeholder="60" />
                <div className="IconNext">
                  <img src={NextIcon} alt="" />
                </div>
              </WrapperInt>
              <MenuWrapper>
                <div onClick={() => changeDisplay('hmenu')} className="Gridicon">
                  <img src={Gridicon} alt="Gridicon-Image" />
                </div>
                <div onClick={() => changeDisplay('vmenu')} className="Viewlist">
                  <img  src={Viewlist} alt="Viewlist-Image" />
                </div>
              </MenuWrapper>
            </MiddleSortByCon>
          </MiddelRightText>
          <RightLiner></RightLiner>
        </div>
        {display === 'hmenu' ? <Hmenu />: <VmenuComponents/>}
      </MiddelRight>
    </MiddelContainer>
  );
};

export default MotorMiddle;
