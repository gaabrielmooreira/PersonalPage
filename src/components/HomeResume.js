import styled from "styled-components"
import SocialMedias from "./SocialMedias"
import { AiOutlineArrowRight } from 'react-icons/ai';
import foto_gabriel from "../assets/Gabriel.png";

export default function HomeResume() {
    return (
        <HomeContainer>
            <LeftContainer>
                <TopLineTitle />
                <DescriptionMeTitle>I’m Gabriel, a Full Stack Developer</DescriptionMeTitle>
                <DescriptionMe></DescriptionMe>
                <CirclePhoto>
                    <img src={foto_gabriel} alt="foto_perfil" />
                </CirclePhoto>
            </LeftContainer>
            <RightContainer>
                <ContainerResume>
                    <h2>ABOUT ME</h2>
                    <p>I started my career in software development two years ago, diving in the technology world.</p>
                    <LinkContainer>
                        <LinkMoreInformation href="#about-me"><p>LEARN MORE<span><AiOutlineArrowRight size="16px" /></span></p>  <div /></LinkMoreInformation>
                    </LinkContainer>
                </ContainerResume>
                <DivHorizontalSeparator />
                <ContainerResume>
                    <h2>MY WORK</h2>
                    <p>In those two years, i've made a lot of real projects to put my skills in practice.</p>
                    <LinkContainer>
                        <LinkMoreInformation href="#portfolio"><p>BROWSE PORTFOLIO<span><AiOutlineArrowRight size="16px" /></span></p>  <div /></LinkMoreInformation>
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

const CirclePhoto = styled.div`
    margin-top: 50px-;
    width: 300px;
    height: 300px;
    margin-right: 20px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
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
    a {
        text-decoration: none;
        color: #FFF;
    }
`

const LinkMoreInformation = styled.a`
    align-self: flex-end;
    font-size: 16px;
    font-weight: 400;
    p{
        margin-bottom: 5px;
        span{
            padding: 0px 5px 0px 5px;
            transition: padding .2s linear;
        }
    }
    div{
        height: 2px;
        width: 100%;
        background-color: #C3CAD5;
        background: linear-gradient(to right, #FFFFFF 50%, #5D6C83 50%);
        background-size: 200% 100%;
        background-position: right;
        transition: background-position 0.5s ease;
    }
    &:hover{
        cursor: pointer;
        div{
            background-position: left;
        }
        p {
            span{
            padding: 0px 0px 0px 10px;
            }
        }
    }
`

const DivHorizontalSeparator = styled.div`
    height: 1px;
    width: 100%;
    background-color: #2D343F;
    margin: 40px 0;
`

