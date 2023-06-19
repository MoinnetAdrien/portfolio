import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  PricingContainer,
  PricingItem,
  PricingTitle,
  PricingSubtitle,
  PricingPrice,
  PricingAdvantages,
  PricingAdvantage,
  PricingAdvantageText,
  PricingButton,
  PricingDevelopment,
  PricingLegend,
  WhiteFrame,
  WhiteFrameText,
  WhiteFrameSpan,
  StyledIcon
} from './PricingStyles';
import { pricingData } from '../../constants/constants';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Contact from '../Contact/Contact'

library.add(faPlus);

const Pricing = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleFrameClick = () => {
    setIsContactVisible(!isContactVisible);
  };

  // Animation spring pour le fadeInUp
  const fadeAnimation = useSpring({
    opacity: isContactVisible ? 1 : 0,
    transform: isContactVisible ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <Section id="pricing">
      <SectionDivider />
      <SectionTitle main>Pricing</SectionTitle>
      <WhiteFrame onClick={handleFrameClick}>
        <WhiteFrameText>UNE IDÉE ? UN PROJET ? N'HÉSITEZ PAS À <WhiteFrameSpan>DEMANDER UN DEVIS</WhiteFrameSpan> ! [GRATUIT]</WhiteFrameText>
      </WhiteFrame>
      {isContactVisible &&
      <animated.div style={fadeAnimation}>
        <Contact />
      </animated.div>}
      <PricingContainer>
        {pricingData.slice(0, 3).map((tarif, index) => (
          <PricingItem key={index} index={index}>
            <PricingTitle>{tarif.title}</PricingTitle>
            <PricingSubtitle>{tarif.subtitle}</PricingSubtitle>
            <PricingPrice>{tarif.price}<sup>€ *</sup></PricingPrice>
            <PricingDevelopment>{tarif.development}</PricingDevelopment>
            <PricingAdvantages>
              {tarif.advantages.map((advantage, advantageIndex) => (
                <PricingAdvantage key={advantageIndex} index={advantageIndex}>
                  <StyledIcon icon={faPlus} className="fa-plus" style={{ "--fa-primary-color": "#2dbda1", "--fa-secondary-color": "#023050", "--fa-secondary-opacity": "1" }} />
                  <PricingAdvantageText>{advantage}</PricingAdvantageText>
                </PricingAdvantage>
              ))}
            </PricingAdvantages>
            <PricingButton>Demander un devis</PricingButton>
          </PricingItem>
        ))}
        <div>
          {pricingData.slice(3, 4).map((tarif, index) => (
            <PricingItem key={index} style={{ marginBottom: '20px' }}>
              <PricingTitle>{tarif.title}</PricingTitle>
              <PricingSubtitle>
                <span style={{ color: '#2a2a2a', fontWeight: '700', fontSize: '25px' }}>{tarif.subtitle}</span><sup style={{ color: '#2a2a2a', fontWeight: '500', display: 'inline', fontSize: '15px'  }}>€/HEURE ** ou</sup>
              </PricingSubtitle>
              <PricingPrice>{tarif.price}<sup>€/AN ***</sup></PricingPrice>
              <PricingDevelopment>{tarif.development}</PricingDevelopment>
              <PricingAdvantages>
                {tarif.advantages.map((advantage, advantageIndex) => (
                  <PricingAdvantage key={advantageIndex} index={advantageIndex}>
                    <StyledIcon icon={faPlus} className="fa-plus" style={{ "--fa-primary-color": "#2dbda1", "--fa-secondary-color": "#023050", "--fa-secondary-opacity": "1" }} />
                    <PricingAdvantageText>{advantage}</PricingAdvantageText>
                  </PricingAdvantage>
                ))}
              </PricingAdvantages>
              <PricingButton>Me contacter</PricingButton>
            </PricingItem>
          ))}
          {pricingData.slice(4, 5).map((tarif, index) => (
            <PricingItem key={index}>
              <PricingTitle>{tarif.title}</PricingTitle>
              <PricingSubtitle>{tarif.subtitle}</PricingSubtitle>
              <PricingPrice>{tarif.price}<sup>€/JOUR</sup></PricingPrice>
              <PricingDevelopment>{tarif.development}</PricingDevelopment>
              <PricingAdvantages>
                {tarif.advantages.map((advantage, advantageIndex) => (
                  <PricingAdvantage key={advantageIndex} index={advantageIndex}>
                    <StyledIcon icon={faPlus} className="fa-plus" style={{ "--fa-primary-color": "#2dbda1", "--fa-secondary-color": "#023050", "--fa-secondary-opacity": "1" }} />
                    <PricingAdvantageText>{advantage}</PricingAdvantageText>
                  </PricingAdvantage>
                ))}
              </PricingAdvantages>
              <PricingButton>Me contacter</PricingButton>
            </PricingItem>
          ))}
        </div>
      </PricingContainer>
      <PricingLegend><b><u>L'ensemble des tarifs indiqués sont H.T.</u></b> * <b>Prix à titre informatif</b> : Changement possible selon les demandes et les choix du client. ** Estimation du temps de travail appuyé par un devis. *** Maintenance annuelle (engagement 12 mois). <b>Droit d'auteur et propriété intellectuelle</b> : Vous êtes à la fin du projet, propriétaire de l'ensemble des sources (fichiers) composant celui-ci. <b>Paiment possible en plusieurs fois.</b></PricingLegend>
    </Section>
  );
};

export default Pricing;
