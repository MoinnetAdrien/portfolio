import Link from 'next/link';
import React, { useEffect, useState} from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillHome} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, StyledLink } from './HeaderStyles';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const topThreshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition <= topThreshold) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }

      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 1 && rect.bottom > 0) {
          setActiveSection(section.id);
        }
      });

      setPrevScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container scrolled={scrolled} id="header">
      <Div1 onClick={handleScrollTop}>
        <Link href="/">
          <StyledLink>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </StyledLink>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#home">
            <NavLink className={`home-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleScrollTop}>
              <AiFillHome size="2rem" />
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <NavLink className={activeSection === 'services' ? 'active' : ''}>Services</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <NavLink className={activeSection === 'skills' ? 'active' : ''}>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink className={activeSection === 'projects' ? 'active' : ''}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#pricing">
            <NavLink className={activeSection === 'pricing' ? 'active' : ''}>Tarifs</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink className={activeSection === 'about' ? 'active' : ''}>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink className={activeSection === 'contact' ? 'active' : ''}>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/MoinnetAdrien" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/adrien-moinnet-ba430a210/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/adrien.moinnet/" target="_blank">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:moinnetadrien@gmail.com" target="_blank">
          <AiFillMail size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;