import React from 'react';
import { Header } from '../component';
import * as ROUTES from '../config/router';
import logo from '../logo.png';
import newlogo from '../logo.svg';
import useAuth from '../helpers/useAuth';
import userEvent from '@testing-library/user-event';

export default function HeadCon({children, ButtonOption, ...restProps}) {
    const {logout, loading, error, isLogin, user} = useAuth();
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
                    <Header.Textlink>Browse</Header.Textlink>
                    <Header.Dropdown>
                        <Header.Group>
                            <Header.UrlLink to={ROUTES.SIGN_IN}>Sign In</Header.UrlLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.UrlLink to={ROUTES.BROWSE}>Browse</Header.UrlLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.UrlLink to={ROUTES.SIGN_UP}>Sign Up</Header.UrlLink>
                        </Header.Group>
                    </Header.Dropdown>
                </Header.Profile>
                </Header.Group>
                <Header.Group>
                    <Header.Account>
                        <Header.Textlink>{username}</Header.Textlink>
                        <Header.Dropdown>
                        <Header.Group>
                            <Header.Textlink>{username}</Header.Textlink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Textlink>Sign out</Header.Textlink>
                        </Header.Group>
                    </Header.Dropdown>
                    </Header.Account>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    )
}