
import styled from "styled-components";

export default function SocialMediaLink(props){
    const {isMouseOver, setMouseOver} = props;
    return(
        <SocialMediaLi onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)} isMouseOver={isMouseOver}>
            <a href="#">{props.children}</a>
        </SocialMediaLi>
    )
}

const SocialMediaLi = styled.li`
    padding: 3px 0 0 0;
    transition: padding .3s ease;
    &:not(:hover){
        opacity: ${props=> props.isMouseOver ? '0.5' : '1.0'};
    }
    &:hover{
        cursor: pointer;
        opacity: ${props => props.isMouseOver && '1.0'};
        padding: 0 0 3px 0;
    }
    a {
        text-decoration: none;
        color: #FFF;
    }
`