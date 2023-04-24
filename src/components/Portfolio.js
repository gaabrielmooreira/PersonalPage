import styled from "styled-components"
import {AiOutlineArrowRight} from 'react-icons/ai'
import ProjectCard from "./ProjectCard"

export default function Portfolio() {
    return (
        <PortfolioDiv>
            <StyledH2><span>/</span> My Portfolio</StyledH2>
            <DescriptionContainer>
                <Description>Explore my latest projects i've done</Description>
                <BrowseMyProjects><p>Browse all projects<span><AiOutlineArrowRight size="25px"/></span></p>  <div /></BrowseMyProjects>
            </DescriptionContainer>
            <ProjectCard/>
        </PortfolioDiv>
    )
}

const PortfolioDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`

const Description = styled.p`
    width: 40%;
    font-size: 50px;
    font-weight: 700;
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
`
