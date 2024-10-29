import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavLink = styled(Link)`
text-decoration:none;
`

export const Container = styled.div`
display:flex;
padding: 22px 70px;
@media only screen and (max-width:600px)
    {
        padding: 15px 30px;
    }
`

export const LogoCamper = styled.div`
color: var(--blue, #006DAB);
font-size: 38px;
font-style: normal;
font-weight: 600;
display:flex;
align-items:center;
flex:1;
`

export const MiddleWrapper = styled.div`
display:flex;
align-items:center;
flex:3;
justify-content:space-evenly;
    div{
        display:flex;
        align-items:center
        
    }
    div{
        cursor: pointer;
        text-decoration: none;
        color: var(--text, #373737);
        font-style: normal;
        font-size: 16px;
        line-height: normal;
        font-weight: 600;
    }
    @media only screen and (max-width:1000px) {
        display:none;
}
`

export const Bottomimg = styled.img`
margin-left:5px
`

export const RigthWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:24px;
    flex:1;
    @media only screen and (max-width:600px)
    {
        gap:5px;
    }
`
export const Language = styled.select`
border:none;
cursor: pointer;
`
export const Cart = styled.img`
cursor: pointer;
`

export const IconMan = styled.img`
cursor: pointer;
@media only screen and (max-width:600px)
    {
        display:none;
    }

`
export const LeftMenuBtn = styled.img`
    margin-right:16px;
    cursor: pointer;
    display: none;
    @media only screen and (max-width:1000px)
    {
        display:block;
    }
    @media only screen and (max-width:600px)
    {
        display:none;
    }
`

export const RigthtMenuBtn = styled.img`
    margin-left:16px;
    cursor: pointer;
    display: none;
    @media only screen and (max-width:600px)
    {
        display:block;
        margin-right:0px;
    }
`