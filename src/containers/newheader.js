import React from 'react';
import { Header } from '../component';
import * as ROUTES from '../config/router';
import logo from '../logo.png';
import newlogo from '../logo.svg';

export default function HeadCon({children, ButtonOption, ...restProps}) {
    

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
                {ButtonOption ? <Header.ButtonLink to={ROUTES.SIGN_UP}>Sign Up</Header.ButtonLink> : <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>}
            </Header.Frame>
            {children}
        </Header>
    )
}