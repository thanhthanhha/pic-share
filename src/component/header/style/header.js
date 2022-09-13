import styled, {keyframes}from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction : column;
    background: white;
    
    @media (max-width: 1100px) {
      ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Container = styled.div`
      display: flex; 
      margin: 0 60px;
      height: 150px;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
      }
    

      @media (max-width: 1000px) {
        margin: 0 30px;
      }
`;

export const Textlink = styled.p`
    color: #000000;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
      }
`;

export const Link = styled(ReactRouterLink)`
      color: #000000;
      text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
      }
`;


export const Group = styled.div`
    display: flex;
    align-items: center;    
`;

export const Dropdown = styled.div`
display: none;
position: absolute;
background-color: white;
padding: 10px;
width: 100px;
top: 32px;
right: 10px;

${Group}:last-of-type ${Link} {
  cursor: pointer;
}

${Group} {
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${Link} {
    cursor: pointer;
  }

}

button {
  margin-right: 10px;
}

p {
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;
}
`;

export const Profile = styled.div`
      display:flex;
      align-items: center;
      margin-left: 20px;
      position: relative;
    
      button {
        cursor: pointer;
      }
      &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
      }

      &:hover > ${Link} {
        font-weight: bold;
      }
`;

export const Icon = styled.img`
height: 40px;
width: 60px;
margin-right: 40px;
border-style: solid;

@media (min-width: 1000px) {
  height: 40px;
  width: 60px;
}
`;

export const Logo = styled.img`
height: 40px;
width: 60px;
margin-right: 40px;

@media (min-width: 1449px) {
  height: 40px;
  width: 60px;
}
`;

const ShineAni = keyframes`
to {
    background-position: 200% center;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background: #900;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
`;