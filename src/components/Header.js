import styled from "styled-components"
import { TbMenu } from "react-icons/tb"

export default function Header() {
    return (
        <StyledHeader>
            <StyledH1><span>{"</>"}</span> Full Stack Developer</StyledH1>
            <StyledNav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
                {false && <StyledTbMenu />}
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
    justify-content: flex-end;
    ul {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFFFFF;
        font-size: 20px;
        a {
        text-decoration: none;
        color: #FFFFFF;
        }
    }
`
const StyledTbMenu = styled(TbMenu)`
    color: #FFFFFF;
    font-size: 30px;
`