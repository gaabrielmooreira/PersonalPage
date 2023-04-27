import styled from "styled-components"
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function AboutMeResume() {
    return (
        <AboutMeContainer>

            <StyledH2><span>/</span> ABOUT ME</StyledH2>
            <MainContainer>
                <LeftContainer>
                    <DescriptionMeTitle>I’ve been developing since 2020</DescriptionMeTitle>
                    <Description>
                        My first contact with development was at CEFET/RJ, where I chose informatics for the technician, there I learned a little about computer architecture, notions about computer networks and basic notions of programming in the C++ language.
                    </Description>
                </LeftContainer>
                <RightContainer>
                    <div>
                        <DescriptionProject>
                            <p>
                                <span>2</span>
                                Years of experience
                            </p>
                            <p>
                                <span>25</span>
                                Open source projects
                            </p>
                        </DescriptionProject>
                    </div>
                    <Description>
                        In 2020, when i go back to the technology area, i've been developing API's in TypeScript with NodeJs enviroment and front-ends in ReactJs. In this moment, i have done 25 public projects.
                    </Description>
                </RightContainer>
            </MainContainer>
            <MoreAboutMeContainer>
                <MoreAboutMeLink href="https://www.linkedin.com/in/gaabrielmooreira/" target="_blank"><p>More About Me<span><AiOutlineArrowRight size="25px" /></span></p>  <div /></MoreAboutMeLink>
            </MoreAboutMeContainer>
        </AboutMeContainer>
    )
}

const AboutMeContainer = styled.div`
    width: 1024px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 1279px){
        width: 80%;
    }
`

const StyledH2 = styled.h2`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 30px;
    span{
        color: #235fe4;
        font-size: 30px;
    }
`

const MainContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

const LeftContainer = styled.div`
    width: 50%;
    padding-right: 5%;
    @media screen and (max-width: 767px){
        width: 100%;
        padding: 0;
    }
`

const RightContainer = styled.div`
    width: 50%;
    padding-left: 5%;
    @media screen and (max-width: 767px){
        display: none;
    }
`

const DescriptionMeTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 12px;
    @media screen and (max-width: 1279px){
        font-size: 40px;
    }
`

const Description = styled.p`
    color: #BEC5D5;
    font-size: 16px;
    line-height: 30px;
`

const DescriptionProject = styled.div`
    display: flex;
    margin-bottom: 12px;
    p {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        gap: 10px;
    }
    p span {
        font-size: 60px;
        float:left;
        letter-spacing: -3px;
    }
`

const MoreAboutMeContainer = styled.div`
    margin-top: 50px;
    width: 230px;
    a {
        text-decoration: none;
        color: #FFF;
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
    }
    @media screen and (max-width: 767px){
        width: 80%;
        margin: 50px auto 0 auto;
    }
`

const MoreAboutMeLink = styled.a`
    align-self: flex-end;
    font-size: 30px;
    font-weight: 700;
    p{
        margin-bottom: 10px;
        span{
            padding: 0px 5px 0px 5px;
            transition: padding .2s linear;
        }
    }
    div{
        height: 3px;
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

    @media screen and (max-width: 480px){
        div {
            width: 80%;
        }
    }
    @media screen and (max-width: 768px){
        div {
            width: 230px;
        }
    }
`