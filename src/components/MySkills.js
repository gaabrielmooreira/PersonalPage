import styled from "styled-components";
import skillsList from "../mocks/skillsList";
import Skill from "./Skill";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRef } from "react";
import { useState } from "react";

export default function MySkills() {
    const carousel = useRef(null);
    const items = skillsList.map((s) => <Skill objectSkill={s} />);
    const [index, setIndex] = useState(0);

    const slideNext = (e) => {
        if (index >= skillsList.length - 2.5) return;
        const newIdx = index + 1;
        setIndex(newIdx);

        carousel?.current?.slideNext(e);
    }

    const slidePrev = (e) => {
        if (index === 0) return;
        const newIdx = index - 1;
        setIndex(newIdx);
        carousel?.current?.slidePrev(e);
    }

    const onSlideChanged = (e) => {
        setIndex(e.item);
    }

    return (
        <MySkillsContainer>
            <StyledH2><span>/</span> My Skills</StyledH2>
            <DescriptionAndButtons>
                <DescriptionTitle>My list of skills</DescriptionTitle>
                <div>
                    <PrevButton onClick={slidePrev} >{"<"}</PrevButton>
                    <NextButton onClick={slideNext} >{">"}</NextButton>
                </div>
            </DescriptionAndButtons>
            <AliceCarousel
                key="carousel"
                ref={carousel}
                activeIndex={index}
                controlsStrategy="responsive"
                disableDotsControls
                disableButtonsControls
                responsive={{
                    0: { items: 1.05 },
                    479: { items: 1.5 },
                    767: { items: 1.8 },
                    1023: { items: 2.5, itemsFit: 'contain' }
                }}
                mouseTracking={true}
                items={items}
                onSlideChanged={onSlideChanged}
            />
        </MySkillsContainer>
    )
}

const MySkillsContainer = styled.div`
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
    margin-top: 125px;
    span{
        color: #235fe4;
        font-size: 30px;
    }
`

const DescriptionAndButtons = styled.div`
    display: flex;
    justify-content: space-between;
`

const DescriptionTitle = styled.h3`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 0;
    @media screen and (max-width: 1279px){
        font-size: 40px;
    }
`

const PrevButton = styled.button`
    width: 88px;
    height: 88px;
    border: none;
    border-radius: 50%;
    background-color: #2D343F;
    color: #FFF;
    margin-right: 5px;
    font-size: 35px;
    &:hover{
        cursor: pointer;
        transition: all 1s;
        background-color: #235fe4;
        transform: scale(0.95);
    }
    @media (max-width: 1023px){
        display: none;
    }
`

const NextButton = styled.button`
    width: 88px;
    height: 88px;
    border: none;
    border-radius: 50%;
    background-color: #235fe4;
    color: #FFF;
    font-size: 35px;
    &:hover{
        cursor: pointer;
        transition: all 0.8s;
        transform: scale(0.95);
    }
    @media (max-width: 1023px){
        display: none;
    }
`