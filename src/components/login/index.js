import React from 'react'
import { axios } from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { LogIn, LogOut } from '../../actions/login'

import FormLogin from './formLogin'

import styled from 'styled-components'

const Login = () => {
    const logState = useSelector(state => state.login.logStatus)
    const dispatch = useDispatch()

    const CallEasyLoginApi = (loginForm, history, setErrorMsg) => {
        axios.post({
            header: {
                "Access-Control-Allow-Origin": "*"
            },
            url: 'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: loginForm.login,
                password: loginForm.password
            }
        })
        .then(res => {
            localStorage.setItem('token', res.headers['x-access-token'])
            console.log('Token granted')
            history.push('/' + localStorage.getItem('token'))
            dispatch(LogIn())
        })
        .catch(err => {
            setErrorMsg('ATTENTION ! Une erreur est survenue !')
            console.log(err)
        })
    }
    
    const Submit = (e, loginForm, setErrorMsg, history) => {
        e.preventDefault()
    
        if (!loginForm.login || !loginForm.password)
        {
            setErrorMsg('ATTENTION ! Tous les champs doivent être remplis')
        }
        else {
            CallEasyLoginApi(loginForm, history, setErrorMsg)
        }
    }

    const FLogOut = () => dispatch(LogOut());
    
    return (
        <LoginContainer>
            <FormLogin onSubmit={ Submit } logState={ logState } LogOut={ FLogOut } ></FormLogin>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    padding: 1em;
`
