import styled from "styled-components";
import AboutMeResume from "./components/AboutMeResume";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeResume from "./components/HomeResume";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import FooterNav from "./components/FooterNav";

export default function App() {
  return (
    <>
      <DefaultDiv id="home">
        <Header />
        <HomeResume />
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

