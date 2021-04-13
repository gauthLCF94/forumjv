export const ADD_POST = 'ADD_POST'
export const GET_POST = 'GET_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const AddPost = ({ _title, _author, _date, _content}) => ({
    type: ADD_POST,
    title: _title,
    author: _author,
    date: _date,
    content: _content
})

export const GetPost = (_index) => ({
    type: GET_POST
})

export const GetAllPosts = () => ({
    type: GET_ALL_POSTS
})
