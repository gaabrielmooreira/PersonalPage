import styled from "styled-components";

export default function ProjectCard() {
    return (
        <ProjectCardStyled>
            <ProjectGif />
            <ProjectDescription>
                <DescriptionTitle>Dashboard</DescriptionTitle>
                <Description>ASSASHIASHI ASHISAHIASHI ASIHASISAHIA ASIhSAIHSA</Description>
                <BrowseProject>view project</BrowseProject>
            </ProjectDescription>
        </ProjectCardStyled>
    )
}

const ProjectCardStyled = styled.div`
    width: 320px;
    height: 520px;
    border-radius: 30px;
    background-color: #2D343F;
`

const ProjectGif = styled.div`
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
    color: #ccc;
    margin-bottom: 30px;
`

const BrowseProject = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
`