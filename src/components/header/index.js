import React from 'react';
import styled from 'styled-components'

import Login from '../login/index'

const Header = () => {
    return (
        <SHeader>
            <Title><TitleSpan>Forum</TitleSpan> Jeux Vidéos</Title>
            <Login></Login>
        </SHeader>
    )
}

export default Header

const SHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${ props => props.theme.blue };
`

const Title = styled.h1`
    color: ${ props => props.theme.orange };
`

const TitleSpan = styled.span`
    color: ${ props => props.theme.white };
`
