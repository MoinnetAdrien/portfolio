import styled from 'styled-components';

export const ServicesContainer = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 20px;
  padding: 60px 0;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const ServicesCardSide = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ServicesCardCenter = styled.div`
  width: 20%;
  margin: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ServicesIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const ServicesTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ServicesDescription = styled.p`
  font-size: 16px;
  color: #777;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const IconCercle = styled.span`
  font-size: 25px;
  padding: 20px 0 0;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  width: 68px;
  height: 68px;
  top: 0;
  right: 0;
  left:auto;
  border: 2px solid transparent;
  color: #2dbda1;
  border-color: #2dbda1;
  transition: all 0.4s ease;

  @media screen and (max-width: 768px) {
    left: 0;
  }
`;

export const IconCercleRight = styled.span`
  font-size: 25px;
  padding: 20px 0 0;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  width: 68px;
  height: 68px;
  top: 0;
  left: 0;
  right:auto;
  border: 2px solid transparent;
  color: #2dbda1;
  border-color: #2dbda1;
  transition: all 0.4s ease;
`;

export const ServicesItem = styled.div`
  position: relative;
  padding-left: 0;
  text-align: right;
  padding-right: 96px;
  padding-bottom: 30px !important;
  cursor: pointer;
  min-width: 300px;
  min-height: 130px;

  &:hover ${IconCercle} {
    background-color: #2dbda1;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding-right: 0;
    text-align: left;
    padding-left: 96px;
  }
`;

export const ServicesItemRight = styled.div`
  position: relative;
  padding-right: 0;
  text-align: left;
  padding-left: 96px;
  padding-bottom: 30px !important;
  cursor: pointer;
  min-width: 300px;
  min-height: 130px;

  &:hover ${IconCercleRight} {
    background-color: #2dbda1;
    color: #fff;
  }
`;


export const TitleDescriptionWrapper = styled.div`
  flex: 1;
`;