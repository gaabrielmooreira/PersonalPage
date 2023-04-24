import styled from "styled-components"
import SocialMedias from "./SocialMedias"

export default function HomeResume() {
    return (
        <HomeContainer>
            <LeftContainer>
                <TopLineTitle />
                <DescriptionMeTitle>I’m Gabriel, a Web Developer</DescriptionMeTitle>
                <DescriptionMe>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.</DescriptionMe>
            </LeftContainer>
            <RightContainer>
                <ContainerResume>
                    <h2>ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.</p>
                    <LinkContainer>
                        <a href="#">LEARN MORE</a>
                    </LinkContainer>
                </ContainerResume>
                <DivHorizontalSeparator />
                <ContainerResume>
                    <h2>MY WORK</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.</p>
                    <LinkContainer>
                        <a href="#">BROWSER PORTFOLIO</a>
                    </LinkContainer>
                </ContainerResume>
                <DivHorizontalSeparator />
                <ContainerResume>
                    <h2>FOLLOW ME</h2>
                    <SocialMedias />
                </ContainerResume>
            </RightContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
`

const LeftContainer = styled.div`
    width: 50%;
    padding-right: 5%;
`

const RightContainer = styled.div`
    width: 50%;
    padding-left: 22.5%;
`

const TopLineTitle = styled.div`
    height: 8px;
    width: 130px;
    background-color: #FFF;
    margin-bottom: 40px;
`

const DescriptionMeTitle = styled.p`
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 12px;
`

const DescriptionMe = styled.p`
    color: #B4BAC4;
    font-size: 16px;
    line-height: 30px;
`

const ContainerResume = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 15px;
    }
    p {
        color: #B4BAC4;
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 25px;
    }
`

const LinkContainer = styled.div`
    font-size: 16px;
    font-family: 'Inconsolata', monospace;
    width: max-content;
    border-bottom: 1px solid #FFF;
    padding-bottom: 5px;
    a {
        text-decoration: none;
        color: #FFF;
    }
`

const DivHorizontalSeparator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #2D343F;
    margin: 40px 0;
`


