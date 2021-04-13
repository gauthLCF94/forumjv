import React from 'react'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Footer = () => {
    return(
        <SFooter>
            <p>Ceci est une imitation du forum <Forum><Link to="https://www.jeuxvideo.com/">Jeuxvideos.com</Link></Forum> réalisé dans un but d'apprentissage de ReactJS</p>
        </SFooter>
    )
}

export default Footer

const SFooter = styled.footer`
    position: relative;
    bottom: 0;
    height: 75px;
    width: 100%;
    background: ${ props => props.theme.blue };
    color: ${ props => props.theme.white };
    text-align: center;
    padding-top: 0.15em;
    margin-bottom: -50px;
`
const Forum = styled.span`
    color: ${ props => props.theme.orange };
`
