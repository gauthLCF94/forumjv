import React from 'react'

import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const PostPreview = (post) => {
    // Voir le PostDetails du post au clic sur le bouton 'voir post' (Router => /post)  
    const logState = useSelector(state => state.login.logStatus)

    let link = <NoLink>Connectez-vous pour voir ce post</NoLink>
    
    if (logState) {
        link = <Link to="/details">Voir le post</Link>
    }

    return(
        <PostContainer>
            <h3>Post title</h3>
            <p>Author</p>
            <p>Comment number</p>
            { link }
        </PostContainer>
    )
}

export default PostPreview

const PostContainer = styled.div`
    border: solid ${ props => props.theme.orange };
    margin: 0.2em;
    padding: 0.5em;
`

const NoLink = styled.p`
    font-style: italic;
    font-size: 0.75em;
`
