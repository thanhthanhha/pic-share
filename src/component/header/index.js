import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';


export default function Header({bg = true, children, ...restProps}) {
    return bg ? (
        <Background {...restProps}>
            children
        </Background>
    ) : (
        children
    );
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

Header.Icon = function HeaderIcon({to , ...restProps}) {
    return (
            <ReachRouterLink to={to}>
                <Icon {...restProps}/>
            </ReachRouterLink>
        );
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}> {children} </Group>
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}> {children} </Profile>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}> {children} </Dropdown>
}

Header.Textlink = function HeaderTextlink({children, ...restProps}) {
    return <Textlink {...restProps}> {children} </Textlink>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>
}