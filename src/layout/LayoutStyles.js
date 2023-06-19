import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 9999;
  padding-right: 5%;
    padding-left: 5%;
`;

export const LeftDivision = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px;
  justify-content: flex-start;
`;

export const RightDivision = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px;
  justify-content: flex-end;
  margin-left: auto;
`;

export const Text = styled.a`
  color: white;
  cursor: pointer;
`;

export const TextToHide = styled.span`
    ${() => css`
        @media screen and (max-width: 768px) {
            &.hide-on-mobile {
                display: none;
            }
        }
    `}
`;

export const IconSimple = ({ icon, ref }) => (
    <Text href={ref} target="_blank">
        <FontAwesomeIcon icon={icon} />
    </Text>
  );

export const IconText = ({ icon, text, mailto }) => (
  <Text href={mailto} target="_blank">
    <FontAwesomeIcon icon={icon} />
    <TextToHide className="hide-on-mobile">{text}</TextToHide>
  </Text>
);

export const CopyPhone = ({ icon, text, onClick }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = () => {
    onClick();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Réinitialise le message après 2 secondes
  };

  return (
    <Text onClick={handleCopy}>
      <FontAwesomeIcon icon={icon} />
      <TextToHide className="hide-on-mobile">{text}</TextToHide>
      <MessagePopup visible={showMessage}>Copié !</MessagePopup>
    </Text>
  );
};

export const MessagePopup = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: visibility 0.3s, opacity 0.3s;
`;