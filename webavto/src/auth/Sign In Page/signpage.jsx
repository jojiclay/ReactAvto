import React from "react";
import {
    CreateBtn,
  Forget,
  ForgetPassCon,
  InpContainer,
  InpContainerTwo,
  Input,
  Liner,
  LinerContainer,
  SignBtn,
  SignContainer,
  SignPageContainer,
  WrapIconImg,
  WrapperIconCon,
} from "./style";

import NIcon from "../../assets/nicon.svg"
import GIcon from "../../assets/gicon.svg"
import TalkIcon from "../../assets/talkicon.svg"
import { Link } from "react-router-dom";

const Signpage = () => {
  return (
    <div>
      <SignPageContainer>
        <SignContainer>
          <h1>Sign in</h1>
          <InpContainer>
            <p>Email</p>
            <Input placeholder="Your Email" />
          </InpContainer>
          <InpContainerTwo>
            <p>Password</p>
            <Input placeholder="Your Password" />
          </InpContainerTwo>
          <ForgetPassCon>
            <div>
              <input className="ChekBox" type="checkbox" />
              <p>Keep me logged in</p>
            </div>
            <Forget href="#">Forget your password ?</Forget>
          </ForgetPassCon>
          <Link to={"/motor"}><SignBtn>SIGN IN</SignBtn></Link>
          <LinerContainer>
            <Liner></Liner>
            <label>OR</label>
            <Liner></Liner>
          </LinerContainer>
          <WrapperIconCon>
            <div className="nicon"><WrapIconImg src = {NIcon} /></div>
            <div className="gicon"><WrapIconImg src = {GIcon} /></div>
            <div className="talkicon"><WrapIconImg src = {TalkIcon} /></div>
          </WrapperIconCon>
          <Link to={"/registrate"}><CreateBtn>CREATE ACCOUNT</CreateBtn></Link>
        </SignContainer>
      </SignPageContainer>
    </div>
  );
};

export default Signpage;
