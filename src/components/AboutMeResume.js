import styled from "styled-components"

export default function AboutMeResume() {
    return (
        <AboutMeContainer>

            <StyledH2><span>/</span> ABOUT ME</StyledH2>
            <MainContainer>
                <LeftContainer>
                    <DescriptionMeTitle>I’ve been developing websites since 2020</DescriptionMeTitle>
                    <Description>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </Description>
                </LeftContainer>
                <RightContainer>
                    <div>
                        <DescriptionProject>
                            <p>
                                <span>12</span>
                                Years of experience
                            </p>
                            <p>
                                <span>150</span>
                                Successful projects
                            </p>
                        </DescriptionProject>
                    </div>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.
                    </Description>
                </RightContainer>
            </MainContainer>
            <MoreAboutMeContainer>
                <a href="#">More about me</a>
            </MoreAboutMeContainer>
        </AboutMeContainer>
    )
}

const AboutMeContainer = styled.div`
    height:100%;
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

const MainContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

const LeftContainer = styled.div`
    width: 50%;
    padding-right: 5%;
`

const RightContainer = styled.div`
    width: 50%;
    padding-left: 5%;
`

const DescriptionMeTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 12px;
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
    border-bottom: solid 3px #FFFFFF;
`