import styled from "styled-components"
import { TbMenu } from "react-icons/tb"

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1><span>{"</>"}</span> Full Stack Developer</StyledH1>
            <StyledNav>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                </ul>
                <StyledTbMenu />
            </StyledNav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledH1 = styled.h1`
    font-size: 30px;
    color: #FFFFFF;
    font-weight: 500;
    span {
        color: #235fe4;
    }
`
const StyledNav = styled.nav`
    width: 40%;
    display: flex;
    justify-content: space-around;
    ul {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #FFFFFF;
        font-size: 20px;
    }
`
const StyledTbMenu = styled(TbMenu)`
    color: #FFFFFF;
    font-size: 30px;
`