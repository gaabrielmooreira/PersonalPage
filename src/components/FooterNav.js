import styled from "styled-components"

export default function FooterNav() {
  return (
    <FooterNavContainer>
      <ListMenu>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ListMenu>
    </FooterNavContainer>
  )
}

const FooterNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #1B1F24;
    @media screen and (max-width: 1279px){
        width: 80%;
        margin: 0 auto;
    }
`
const ListMenu = styled.ul`
    display: flex;
    justify-content: center;
    width: 1024px;
    font-size: 20px;
    color: #FFFFFF;
    gap: 60px;
    a {
        text-decoration: none;
        color: #FFFFFF;
    }
    @media screen and (max-width: 479px){
        width: 80%;
        font-size: 16px;
        gap: 30px;
    }
`