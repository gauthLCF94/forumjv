import React from 'react'

import styled from 'styled-components'

const PostDetails = () => {
    // TODO: Réduire/Agrandire les commentaires visibles avec un clic sur <CommentNb>

    return(
        <div>
            <SPostDetails>
                <div>
                    <PostTitle>Post title</PostTitle>
                    <PostAuthor>Post author <PostDate>(Post date)</PostDate></PostAuthor>
                </div>
                <PostContent>
                    <p>Post content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content</p>
                </PostContent>
                <CommentNb>Comment number : 5</CommentNb>
            </SPostDetails>
            <div>
                <CommentContainer>
                    <p>Comment author</p>
                    <p>Comment content</p>
                </CommentContainer>
                <CommentContainer>
                    <p>Comment author</p>
                    <p>Comment content</p>
                </CommentContainer>
                <CommentContainer>
                    <p>Comment author</p>
                    <p>Comment content</p>
                </CommentContainer>
                <CommentContainer>
                    <p>Comment author</p>
                    <p>Comment content</p>
                </CommentContainer>
                <CommentContainer>
                    <p>Comment author</p>
                    <p>Comment content</p>
                </CommentContainer>
                <CommentContainer>
                    <p>Comment author</p>
                    <p>Comment content</p>
                </CommentContainer>
                
            </div>
        </div>
    )
}

export default PostDetails

const SPostDetails = styled.div`
    border: solid ${ props => props.theme.orange };
    margin: 0.2em;
    padding: 0.5em;
`

const PostTitle = styled.h3`
    color: ${ props => props.theme.blue };
    text-decoration: underline;
    font-weight: bold;
`

const PostAuthor = styled.p`
    margin-top: -1em;
`

const PostDate = styled.span`
    font-style: italic
`

const PostContent = styled.div`
    padding: 1em;
    text-align: justify;
`

const CommentNb = styled.p`
    text-align: right;
`

const CommentContainer = styled.div`
    border: solid ${ props => props.theme.blue } 0.1em;
    margin-top: 0.5em;
    margin-right: 0.5em;
    margin-left: 3em;
    margin-bottom: 0.5em;
    padding: 0.2em;
`
