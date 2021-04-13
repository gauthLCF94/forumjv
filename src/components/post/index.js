import React from 'react'

import styled from 'styled-components'

import PostPreview from './postPreview'

const PostList = () => {
    // TODO: Rechercher les post et afficher un PostPreview pour chaque post

    return(
        <ListContainer>
            <PostPreview></PostPreview>
            <PostPreview></PostPreview>
            <PostPreview></PostPreview>
        </ListContainer>
    )
}

export default PostList

const ListContainer = styled.div`
    padding: 0.5em;
`