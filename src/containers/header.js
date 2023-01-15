import React from 'react';
import { Header } from '../component';
import * as ROUTES from '../config/router';
import logo from '../logo.png';
import newlogo from '../logo.svg';
import useAuth from '../helpers/useAuth';
import * as Icon from 'react-feather';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import Loading from "../containers/loading";
window.Buffer = window.Buffer || require("buffer").Buffer; 


export default function HeadCon({children, ButtonOption, ...restProps}) {
    const {logout, loading, error, isLogin, user} = useAuth();
    const history = useNavigate()

    const SignOut = () => {
        console.log("sign");
    };
    const username = localStorage.getItem('user');
    


    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
                <Header.Group>
                <Header.Profile>
                    <Header.Textlink onClick={() => {history('/browse')}}>Browse</Header.Textlink>
                    <Header.Textlink onClick={() => {history('/search')}}>Story</Header.Textlink>
                    <Header.Textlink onClick={() => {history('/about')}}>About</Header.Textlink>
                    <Header.Textlink onClick={() => {history('/contact')}}>Contact Us</Header.Textlink>
                </Header.Profile>
                </Header.Group>
                <Header.Group Width="25px">
                    {username ? <Header.Account>
                        <Header.UserImg>
                                {user?.img ? <Header.User src={`data:${user.img.contentType};base64,${window.Buffer.from(user.img.data.data).toString('base64')}`}/> : <Icon.User size={28}/>}
                        </Header.UserImg>
                        <Header.TextAccLink>{username}</Header.TextAccLink>
                        <Header.Dropdown Right="0%">
                        <Header.Group>
                            <Header.UrlLink to={`${ROUTES.PROFILE}/${username}`}>{username}</Header.UrlLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextAccLink onClick={logout}>Sign out</Header.TextAccLink>
                        </Header.Group>
                    </Header.Dropdown>
                    </Header.Account> : null}
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    )
}