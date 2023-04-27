import styled from "styled-components";

export default function Skill(props){
    const {logoIcon, name, description} = props.objectSkill;

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
    max-width: 380px;
    height: 500px;
    background-color: #2D343F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    border-radius: 30px;
    @media screen and (max-width: 1279px){
        max-width: 300px;
        padding: 30px;
    }

    @media screen and (max-width: 379px){
        height: 400px;
        padding: 30px;
        width: 280px;
    }

    @media screen and (max-width: 326px){
        height: 400px;
        padding: 30px;
        width: 246px;
    }
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
    @media screen and (max-width: 1279px){
        font-size: 30px;
    }
`

const SkillDescription = styled.p`
    font-size: 22px;
    line-height: 30px;
    color: #C3CAD5;
    height: 100px;
    @media screen and (max-width: 1279px){
        font-size: 18px;
    }

    @media screen and (max-width: 326px){
        font-size: 14px;
        line-height: 20px;
    }
`

const BottomLine = styled.div`
    height: 6px;
    width: 55px;
    background-color: #FFFFFF;
`