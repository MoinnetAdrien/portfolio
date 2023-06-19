import { IoIosArrowDropdown } from 'react-icons/io';
import styled, { css } from 'styled-components';

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
`;

export const Container = styled.div`
  position: sticky;
  top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-left: 0;
  z-index: 999;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.2);
  color: white;
  transition: color 1s ease, transform 0.5s ease, background-color 0.5s ease;

  ${(props) =>
    props.scrolled &&
    css`
      background-color: rgba(128, 128, 128, 1);
      transform: translateY(-50px);
      transition: color 1s ease, transform 0.5s ease, background-color 0.5s ease;
    `}
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left:40px;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) { // Ajoutez cette condition
    display: none;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding-right:40px;

  @media (max-width: 768px) { // Ajoutez cette condition
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
  padding: 0.5rem;

  &.active {
    color: rgba(255, 255, 255, 1);
    opacity: 1;
    font-weight: bold;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }

  &.home-link {
    position: relative;
    top: 2px; // Ajustez la valeur selon vos besoins
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`