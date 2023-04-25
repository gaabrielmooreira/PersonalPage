import styled from "styled-components";
import AboutMeResume from "./components/AboutMeResume";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeResume from "./components/HomeResume";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";

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
      <Footer />   
    </>
  );
}

const DefaultDiv = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: #1B1F24;
  padding: 0px calc( (100% - 1024px) / 2 );
`

const SecondDiv = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: #232830;
  padding: 0px calc( (100% - 1024px) / 2 );
`

const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #7e8899;
`


