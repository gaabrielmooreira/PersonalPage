import styled from "styled-components"
import { useState } from "react"
import SocialMediaLink from "./SocialMediaLink"
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

export default function SocialMedias() {
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <SocialMediasContainer>
            <SocialMediaLink isMouseOver={isMouseOver} setMouseOver={setMouseOver}><FaFacebookF size="28px" /></SocialMediaLink>
            <SocialMediaLink isMouseOver={isMouseOver} setMouseOver={setMouseOver}><FaTwitter size="28px" /></SocialMediaLink>
            <SocialMediaLink isMouseOver={isMouseOver} setMouseOver={setMouseOver}><AiFillInstagram size="28px" /></SocialMediaLink>
            <SocialMediaLink isMouseOver={isMouseOver} setMouseOver={setMouseOver}><FaLinkedinIn size="28px" /></SocialMediaLink>
            <SocialMediaLink isMouseOver={isMouseOver} setMouseOver={setMouseOver}><FaGithub size="28px" /></SocialMediaLink>
        </SocialMediasContainer>
    )
}

const SocialMediasContainer = styled.ul`
    width: 250px;
    display: flex;
    justify-content: space-between; 
`