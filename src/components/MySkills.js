import styled from "styled-components";
import skillsList from "../mocks/skillsList";
import Skill from "./Skill";

export default function MySkills() {
    return(
        <MySkillsContainer>
            <StyledH2><span>/</span> My Skills</StyledH2>
            <DescriptionTitle>My list of skills</DescriptionTitle>
            <SkillsContainer>
                {skillsList.map( s => <Skill objectSkill = {s}/>)}
            </SkillsContainer>
        </MySkillsContainer>
    )
}

const MySkillsContainer = styled.div`
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

const DescriptionTitle = styled.h3`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 12px;
`

const SkillsContainer = styled.div`
    display: flex;
    overflow-x: scroll;
`