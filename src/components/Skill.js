import styled from "styled-components";

export default function Skill({objectSkill}){
    const {logoIcon, name, description} = objectSkill;

    return(
        <SkillCard>
            <SkillLogo>{logoIcon}</SkillLogo>
            <SkillName>{name}</SkillName>
            <SkillDescription>{description}</SkillDescription>
            <BottomLine />
        </SkillCard>
    )

}

const SkillCard = styled.div`
    min-width: 380px;
    min-height: 500px;
    background-color: #2D343F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    border-radius: 30px;
    margin-right: 40px;
`

const SkillLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: #235FE4;
    margin-bottom: 20px;
`

const SkillName = styled.h3`
    font-size: 37px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 20px;
`

const SkillDescription =  styled.p`
    font-size: 22px;
    line-height: 40px;
    color: #C3CAD5;
    margin-bottom: 50px;
`

const BottomLine = styled.div`
    height: 6px;
    width: 55px;
    background-color: #FFFFFF;
`