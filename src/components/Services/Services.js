import React from 'react';
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCardCenter,
  ServicesCardSide,
  ServicesIcon,
  ServicesTitle,
  ServicesDescription,
  IconCercle,
  IconCercleRight,
  ServicesItem,
  ServicesItemRight,
  TitleDescriptionWrapper,
} from './ServicesStyles';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPencil, faSquareCheck, faPenToSquare, faArrowsRotate, faRetweet } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  return (
    <Section id="services">
      <SectionDivider />
      <SectionTitle main>Services</SectionTitle>
      <ServicesContainer>
        <ServicesWrapper>
          <ServicesCardSide>
            <ServicesItem>
                <TitleDescriptionWrapper>
                    <ServicesTitle>GESTION DE PROJETS WEB</ServicesTitle>
                    <ServicesDescription>Site vitrine, corporate, énènementiel, e-commerce, intranet, application mobile.</ServicesDescription>
                </TitleDescriptionWrapper>
                <IconCercle>
                    <FontAwesomeIcon icon={faLightbulb} />
                </IconCercle>
            </ServicesItem>
            <ServicesItem>
                <TitleDescriptionWrapper>
                    <ServicesTitle>INTÉGRATION WEB</ServicesTitle>
                    <ServicesDescription>Des intégrations (X)HTML / CSS respectueuses des standards du Web.</ServicesDescription>
                </TitleDescriptionWrapper>
                <IconCercle>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </IconCercle>
            </ServicesItem>
            <ServicesItem>
                <TitleDescriptionWrapper>
                    <ServicesTitle>RÉFÉRENCEMENT NATUREL</ServicesTitle>
                    <ServicesDescription>Affichage sémantique des informations, des pages propres pour un référencement optimal.</ServicesDescription>
                </TitleDescriptionWrapper>
                <IconCercle>
                    <FontAwesomeIcon icon={faSquareCheck} />
                </IconCercle>
            </ServicesItem>
          </ServicesCardSide> 
          <ServicesCardCenter>
            <ServicesIcon src="/images/services2.png" />
          </ServicesCardCenter>
          <ServicesCardSide>
          <ServicesItemRight>
                <TitleDescriptionWrapper>
                    <ServicesTitle>CONCEPTION GRAPHIQUE ET WEBDESIGN</ServicesTitle>
                    <ServicesDescription>Logos, templates Web, plaquettes publicitaires, cartes de visite, newsletters...</ServicesDescription>
                </TitleDescriptionWrapper>
                <IconCercleRight>
                    <FontAwesomeIcon icon={faPencil} />
                </IconCercleRight>
            </ServicesItemRight>
            <ServicesItemRight>
                <TitleDescriptionWrapper>
                    <ServicesTitle>DYNAMISME DES PAGES</ServicesTitle>
                    <ServicesDescription>Des animations de contenu non intrusives pour embellir votre projet.</ServicesDescription>
                </TitleDescriptionWrapper>
                <IconCercleRight>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                </IconCercleRight>
            </ServicesItemRight>
            <ServicesItemRight>
                <TitleDescriptionWrapper>
                    <ServicesTitle>RESPONSIVE DESIGN</ServicesTitle>
                    <ServicesDescription>Compatible tous supports, tablette et application mobile.</ServicesDescription>
                </TitleDescriptionWrapper>
                <IconCercleRight>
                    <FontAwesomeIcon icon={faRetweet} />
                </IconCercleRight>
            </ServicesItemRight>
          </ServicesCardSide>
        </ServicesWrapper>
      </ServicesContainer>
    </Section>
  );
};

export default Services;
