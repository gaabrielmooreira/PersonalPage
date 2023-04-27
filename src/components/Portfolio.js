import styled from "styled-components"
import { AiOutlineArrowRight } from 'react-icons/ai'
import ProjectCard from "./ProjectCard"
import projects from "../mocks/projects"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Portfolio() {
    return (
        <PortfolioDiv>
            <StyledH2><span>/</span> My Portfolio</StyledH2>
            <DescriptionContainer>
                <Description>Explore my latest projects i've done</Description>
                <BrowseMyProjects href="https://github.com/gaabrielmooreira" target="_blank"><p>Browse GitHub<span><AiOutlineArrowRight size="25px" /></span></p>  <div /></BrowseMyProjects>
            </DescriptionContainer>
            <ProjectsContainer>
                <AllProjects>
                    {
                        projects.map(e =>
                            <ProjectCard
                                image={e.image}
                                description={e.description}
                                title={e.title}
                                link={e.link}
                            />
                        )
                    }
                </AllProjects>
                <AliceCarouselDiv>
                    <AliceCarousel
                        disableButtonsControls
                        mouseTracking={true}
                        responsive={{ 0: { items: 1 },}}
                    >
                        {
                            projects.map(e =>
                                <ProjectCard
                                    image={e.image}
                                    description={e.description}
                                    title={e.title}
                                    link={e.link}
                                />
                            )
                        }
                    </AliceCarousel>
                </AliceCarouselDiv>
            </ProjectsContainer>
        </PortfolioDiv>
    )
}

const PortfolioDiv = styled.div`
    width: 1024px;
    height: 100%;
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

const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    a {
        text-decoration: none;
        color: #FFF;
    }
`

const Description = styled.p`
    width: 40%;
    font-size: 50px;
    font-weight: 700;
    @media screen and (max-width: 1023px){
        width: 100%;
        font-size: 40px;
    }
`

const BrowseMyProjects = styled.a`
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
    @media screen and (max-width: 1023px){
        display: none;
    }
`

const ProjectsContainer = styled.div`
`

const AllProjects = styled.div`
    display: flex;
    @media screen and (max-width: 1023px){
        display: none;
    }
`

const AliceCarouselDiv = styled.div`
    display: none;
    @media screen and (max-width: 1023px){
        display: flex;
        width: 325px;
        margin: 0 auto;
    }
`