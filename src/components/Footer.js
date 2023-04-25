import styled from "styled-components"
import foto_gabriel from "../assets/Gabriel.png"
import SocialMedias from "./SocialMedias"

export default function Footer(){
    return (
        <FooterDiv>
            <FooterContent>
                <LeftContent>
                    <AboutMeFooter>
                        <CirclePhoto>
                            <img src={foto_gabriel} alt="foto_perfil"/>
                        </CirclePhoto>
                        <DescriptionMe>
                            <h3>Gabriel Moreira</h3>
                            <p>Full Stack Developer</p>
                        </DescriptionMe>
                    </AboutMeFooter>
                    
                    <SocialMedias/>
                </LeftContent>
                <RightContent>

                </RightContent>
            </FooterContent>

            <HorizontalLine />

            <FooterNav>
                <ListMenu>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ListMenu>
            </FooterNav>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    width: 100vw;
    height: 520px;
    background-color: #1B1F24;
    padding: 0px calc( (100% - 1024px) / 2 );
`
const FooterContent = styled.div`
    height: 420px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
`

const CirclePhoto = styled.div`
    width: 150px;
    height: 150px;
    margin-right: 20px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

const AboutMeFooter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const DescriptionMe = styled.div`
    h3{
        font-size: 34px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p{
        font-size: 24px;
        color: #8895aa;
    }
`

const RightContent = styled.div`
`

const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #7e8899;
`

const FooterNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`
const ListMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 50%;
    font-size: 20px;
    color: #FFFFFF;
    a {
        text-decoration: none;
        color: #FFFFFF;
    }
`