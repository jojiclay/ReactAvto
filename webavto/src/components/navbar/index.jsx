import React from 'react'
import { Bottomimg, Cart, Container, IconMan, Language, LeftMenuBtn, LogoCamper, MiddleWrapper, NavLink, RigthWrapper, RigthtMenuBtn } from './style'
import bottom from "../../assets/bottom.svg" 
import shopingCart from "../../assets/shopingcart.svg"
import man from "../../assets/man.svg"
import LMenuBtn from "../../assets/menubtn.svg"
import RMenuBtn from "../../assets/menubtn.svg"
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
<div>
     <Container>
     <LeftMenuBtn src={LMenuBtn} alt='Menu-BTN' />
      <LogoCamper>
        <Link style={{textDecoration : "none"}} to={"/camper"}>Camper</Link>
        </LogoCamper>
      <MiddleWrapper>
        <NavLink to={"/motor"}>
        <div>Motor <Bottomimg src={bottom} alt='Bottom-Img' /> </div>
        </NavLink>
        <NavLink to={"/caravan"}>
        <div>Caravan <Bottomimg src={bottom} alt='Bottom-Img' /></div>
        </NavLink>
        <NavLink to={"/tuning"}>
        <div>Tuning <Bottomimg src={bottom} alt='Bottom-Img' /></div>
        </NavLink>
        <NavLink to={"/used-car"}>
        <div>Used Car <Bottomimg src={bottom} alt='Bottom-Img' /></div>
        </NavLink>
        <NavLink to={"camping-place"}>
        <div>Camping Place</div>
        </NavLink>
      </MiddleWrapper>
      <RigthWrapper>
        <Cart src={shopingCart} alt="Shoping-Cart" />
        <Link to={"/sign-page"}><IconMan src={man} alt="Man" /></Link>
              <Language value="#">
                  <option>Eng</option>
                  <option>Рус</option>
                  <option>Uzb</option>
              </Language>
              <RigthtMenuBtn src={RMenuBtn} alt='Rigth-Menu-Btn' />
      </RigthWrapper>
     </Container>
</div>
  )
}

export default Navbar