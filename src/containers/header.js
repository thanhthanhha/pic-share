import React from 'react';
import { Header } from '../component';
import * as ROUTES from '../config/router';
import logo from '../logo.png';
import newlogo from '../logo.svg';

export function HeaderContainer({children}) {
    return (
        <Header >
            <Header.Logo src={newlogo} alt="Archive of Our Own"/>
            <Header.Frame>
                <Header.Icon to={ROUTES.HOME} src={logo} alt="Archive of Our Own" />
                <Header.Group>
                    <Header.Profile>
                        <Header.Textlink>Browse</Header.Textlink>
                        <Header.Dropdown to='#'>
                            <Header.Group>
                                <Header.UrlLink to={ROUTES.SIGN_IN}>check</Header.UrlLink>
                                <Header.UrlLink to={ROUTES.SIGN_IN}>this</Header.UrlLink>
                                <Header.UrlLink to={ROUTES.SIGN_IN}>out</Header.UrlLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}