// PricingStyles.js
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin: 2rem auto;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: table;
    margin: 1rem auto;
  }
`;

export const PricingItem = styled.div`
  background-color: white;
  border-radius: 8px;
  text-align: center;
  max-width: 330px; /* Remplacez la largeur fixe par une valeur flexible */
  color: black;
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    margin-bottom : 20px;
    max-width: 100%
  }
`;

export const PricingTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: bold;
  font: 600 18px/24px "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #2a2a2a;
  margin: 0 0 12px;
  padding: 33px 5px 20px;
  letter-spacing: 2px;
  display: block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: #2dbda1;
  }
`;

export const PricingSubtitle = styled.p`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #777;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;

export const PricingPrice = styled.h2`
  margin: 1rem 0;
  color: #2a2a2a;
  display: block;
  font: 700 60px/65px "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: #2dbda1;
  }

  sup {
    position: relative;
    top: -25px;
    font-size: 25px;
    font-weight: 300;
    margin: 0 -7px 0 -3px;
  }
`;

export const PricingDevelopment = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #2a2a2a;
  margin: 0 0 12px;
  padding: 33px 5px 20px;
  letter-spacing: 0.5px;
  display: block;
  position: relative;
`;


export const PricingAdvantages = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px;
`;

export const PricingAdvantage = styled.li`
  display: flex;
  align-items: flex-start;
  background-color: ${({ index }) => (index % 2 === 0 ? '#F2F2F2' : 'white')};
  color: ${({ index }) => (index % 2 === 0 ? '#000000' : '#808080')};
  padding-right: 15px;
  padding-left: 15px;
`;

export const PricingAdvantageText = styled.span`
  text-align: center;
  margin: 1rem auto;
  font-size: 1.1em;
  font-weight: normal;
  padding-left: 7px;
  padding-right: 5px;
  text-transform: none;
  letter-spacing: normal;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${({ index }) => (index % 2 === 0 ? '#000000' : '#808080')};
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin-left: 0.5rem;
  text-align: left;
  margin-top: 1.3rem;
  color: #2dbda1; /* Couleur verte */
  transform: none; 
  stroke-width: 6px; /* Épaisseur du trait */
`;

export const PricingButton = styled.button`
  background-color: #2dbda1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem; /* Augmentation de la taille du bouton */
  font-size: 1.2rem; /* Augmentation de la taille de la police */
  text-transform: uppercase; /* Texte en majuscules */
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #1f806d;
  }
`;

export const PricingLegend = styled.p`
  font-size: .85em;
  margin: 5px 0 0;
`;

export const WhiteFrame = styled.div`
  background: #f5f5f5;
  padding: 20px 15px;
  margin: 0px 2px 20px;
  display: block;
  color: #222;
  font: 20px/25px "Poppins","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
  cursor: pointer;

  &:hover {
    background-color: #d6d6d6;
  }
`;

export const WhiteFrameText = styled.div`
  color: #222;
  font: 20px/25px "Poppins","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

export const WhiteFrameSpan = styled.span`
  color: #2dbda1;
`;


