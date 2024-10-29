import React from 'react'
import { ForgetPassCon, InpContainer, InpContainerTwo, Input, SignBtn, SignContainer, SignPageContainer } from '../Sign In Page/style'
import { Link } from 'react-router-dom'

const Createpage = () => {
  return (
    <div>
    <SignPageContainer>
      <SignContainer>
        <h1>Registrate</h1>
        <InpContainer>
          <p>Email</p>
          <Input placeholder="Your Email" />
        </InpContainer>
        <InpContainerTwo>
          <p>Password</p>
          <Input placeholder="Your Password" />
        </InpContainerTwo>
        <InpContainerTwo>
          <p>Repeat your password</p>
          <Input placeholder="Your Password" />
        </InpContainerTwo>
        <ForgetPassCon>
          <div>
            <input className="ChekBox" type="checkbox" />
            <p>Keep me logged in</p>
          </div>
        </ForgetPassCon>
        <Link to={"/sign-page"}><SignBtn>REGISTRATE</SignBtn></Link  >
      </SignContainer>
    </SignPageContainer>
  </div>
  )
}

export default Createpage