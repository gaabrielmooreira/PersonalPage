import styled from "styled-components";
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function ProjectCard({ image, description, title, link }) {
    return (
        <ProjectCardStyled>
            <ProjectGif src={image} />
            <ProjectDescription>
                <DescriptionTitle>{title}</DescriptionTitle>
                <Description>{description}</Description>
                <BrowseProject href={link} target="_blank"><p>VIEW PROJECT<span><AiOutlineArrowRight size="16px" /></span></p>  <div /></BrowseProject>
            </ProjectDescription>
        </ProjectCardStyled>
    )
}

const ProjectCardStyled = styled.div`
    width: 320px;
    height: 520px;
    border-radius: 30px;
    background-color: #2D343F;
    margin-left: 20px;
    @media screen and (max-width: 1023px){
        width: 300px;
    }
`

const ProjectGif = styled.img`
    width: 100%;
    height: 220px;
    background-color: #CCC;
    border-radius: 30px 30px 0 0;
`

const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 30px 60px 30px;
`

const DescriptionTitle = styled.h4`
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 15px;
`

const Description = styled.p`
    font-size: 16px;
    line-height: 30px;
    height: 90px;
    color: #ccc;
    margin-bottom: 30px;
`

const BrowseProject = styled.a`
    display: block;
    width: 138px;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    p{
        margin-bottom: 10px;
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