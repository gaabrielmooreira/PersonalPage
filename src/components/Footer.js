import styled from "styled-components"
import foto_gabriel from "../assets/Gabriel.png"
import SocialMedias from "./SocialMedias"

export default function Footer() {
    return (
        <FooterDiv>
            <FooterContent>
                <LeftContent>
                    <AboutMeFooter>
                        <CirclePhoto>
                            <img src={foto_gabriel} alt="foto_perfil" />
                        </CirclePhoto>
                        <DescriptionMe>
                            <h3>Gabriel Moreira</h3>
                            <p>Full Stack Developer</p>
                        </DescriptionMe>
                    </AboutMeFooter>

                    <SocialMedias />
                </LeftContent>
                <RightContent>

                </RightContent>
            </FooterContent>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    width: 1024px;
    height: 420px;
    margin: 0 auto;
    @media screen and (max-width: 1279px){
        width: 80%;
    }
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
    @media screen and (max-width: 1279px){
        width: 100%;
        margin: 0 auto;
    }
`

const CirclePhoto = styled.div`
    max-width: 150px;
    max-height: 150px;
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
    @media screen and (max-width: 1279px){
        display: none;
    }
`

