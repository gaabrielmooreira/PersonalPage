import styled from "styled-components";
import AboutMeResume from "./components/AboutMeResume";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeResume from "./components/HomeResume";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import FooterNav from "./components/FooterNav";
import { useState } from "react"

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <DefaultDiv id="home">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <HomeResume />
        {
          menuIsOpen && <Menu>
              <StyledButton onClick={() => setMenuIsOpen(!menuIsOpen)}>X</StyledButton>
              <StyledNav>
                <ul>
                    <li><a onClick={() => setMenuIsOpen(!menuIsOpen)} href="#home">Home</a></li>
                    <li><a onClick={() => setMenuIsOpen(!menuIsOpen)} href="#about-me">About Me</a></li>
                    <li><a onClick={() => setMenuIsOpen(!menuIsOpen)} href="#skills">Skills</a></li>
                    <li><a onClick={() => setMenuIsOpen(!menuIsOpen)} href="#portfolio">Portfolio</a></li>
                </ul>
            </StyledNav>
          </Menu>
        }


      </DefaultDiv>

      <SecondDiv id="about-me">
        <AboutMeResume />
      </SecondDiv>

      <DefaultDiv id="skills">
        <MySkills />
      </DefaultDiv>

      <SecondDiv id="portfolio">
        <Portfolio />
      </SecondDiv>

      <HorizontalLine />
      <FooterDiv>
        <Footer />
        <HorizontalLine />
        <FooterNav />
      </FooterDiv>
    </>
  );
}

const DefaultDiv = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: #1B1F24;
  margin: 0 auto;
`

const Menu = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #1B1F24;
`

const StyledButton = styled.button`
  color: #FFF;
  font-size: 30px;
  background-color: #1B1F24;
  border: none;
  display: flex;
  width: 90vw;
  justify-content: flex-end;
  padding-top: 40px;
  height: 100px;
`

const StyledNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 500px;
  margin: auto auto;

  li{
    margin: 40px 0;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 40px;
    
  }
`

const SecondDiv = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: #232830;
  margin: 0 auto;
`

const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #7e8899;
`

const FooterDiv = styled.div`
  max-width: 100vw;
  height: 520px;
  background-color: #1B1F24;
  margin: 0 auto;
`

