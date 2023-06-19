import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container, IconContainer, LeftDivision, RightDivision, IconText, CopyPhone, IconSimple } from './LayoutStyles';

export const Layout = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("(+32)495.60.46.20");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Réinitialise le message après 2 secondes
  };

  return (
    <React.Fragment>
      <IconContainer>
        <LeftDivision>
          <IconSimple
            icon={faFacebookF}
            text=""
            mailto="https://www.facebook.com/adrien.moinnet/"
          />
          <IconSimple
            icon={faLinkedinIn}
            text=""
            mailto="https://www.linkedin.com/in/adrien-moinnet-ba430a210/"
          />
          <IconSimple
            icon={faInstagram}
            text=""
            mailto="https://www.facebook.com/adrien.moinnet/"
          />
          <IconSimple
            icon={faGithub}
            text=""
            mailto="https://github.com/MoinnetAdrien"
          />
        </LeftDivision>
        <RightDivision>
          <CopyPhone icon={faPhone} text=" (+32)495.60.46.20" onClick={handleCopyPhone} />
          <IconText
            icon={faEnvelope}
            text=" moinnetadrien@gmail.com"
            mailto="mailto:moinnetadrien@gmail.com"
          />
        </RightDivision>
      </IconContainer>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </React.Fragment>
  );
};
