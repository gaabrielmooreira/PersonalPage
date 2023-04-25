import styled from "styled-components"
import { useState } from "react"
import SocialMediaLink from "./SocialMediaLink"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

export default function SocialMedias() {
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <SocialMediasContainer>
            <SocialMediaLink
                isMouseOver={isMouseOver}
                setMouseOver={setMouseOver}
                link="https://www.facebook.com/GaabrielMooreira/"
            >
                <FaFacebookF size="28px" />
            </SocialMediaLink>

            <SocialMediaLink
                isMouseOver={isMouseOver}
                setMouseOver={setMouseOver}
                link="https://twitter.com/gaabrielmo"
            >
                <FaTwitter size="28px" />
            </SocialMediaLink>

            <SocialMediaLink
                isMouseOver={isMouseOver}
                setMouseOver={setMouseOver}
                link="https://instagram.com/gabrielmlimeira"
            >
                <AiFillInstagram size="28px" />
            </SocialMediaLink>

            <SocialMediaLink
                isMouseOver={isMouseOver}
                setMouseOver={setMouseOver}
                link="https://www.linkedin.com/in/gaabrielmooreira/"
            >
                <FaLinkedinIn size="28px" />
            </SocialMediaLink>

            <SocialMediaLink
                isMouseOver={isMouseOver}
                setMouseOver={setMouseOver}
                link="https://github.com/gaabrielmooreira"
            >
                <FaGithub size="28px" />
            </SocialMediaLink>
        </SocialMediasContainer>
    )
}

const SocialMediasContainer = styled.ul`
    width: 250px;
    display: flex;
    justify-content: space-between; 
`