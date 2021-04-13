import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const FormLogin = ({Submit, logState, LogOut}) => {
    const [loginForm, setLoginForm] = useState({login: '', password: ''})
    const [errorMsg, setErrorMsg] = useState('');
    const history = useHistory()

    if(logState) {
        return(
            <div>
                <p>Welcome !</p>
                <Button onClick={LogOut()}>Log Out</Button>
            </div>
        )
    }
    else {
        return (
            <Form onSubmit={(e) => Submit(e, loginForm, setErrorMsg, history, LogOut)}>
                <Input
                    type='text'
                    placeholder='Login'
                    onChange={ e => setLoginForm({...loginForm, login: e.target.value}) }
                />
                <Input
                    type='password'
                    placeholder='Password'
                    onChange={ e => setLoginForm({...loginForm, password: e.target.value}) }
                />
                <SSubmit
                    type='submit'
                    value='Log In'
                />
                <p>{errorMsg}</p>
            </Form>
        )
    }
}

export default FormLogin

const Button = styled.button`
    margin: 0.5em;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    max-width: 7.5em;
    border: solid ${props => props.theme.orange} 0.15em;
    margin: 0.1em;
`

const SSubmit = styled.input`
    margin: 0.5em;
    max-width: 7.5em;
`