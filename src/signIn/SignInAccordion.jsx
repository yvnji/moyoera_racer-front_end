import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import upIcon from '../assets/icons/u_angle-up.svg';
import downIcon from '../assets/icons/u_angle-down.svg';

const SigninAccordion = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionWrapper>
      <AccordionButton onClick={toggleAccordion} expanded={expanded}>
        이메일로 시작하기
        {expanded ? (
          <AccordionIcon src={upIcon} alt='Up Icon' />
        ) : (
          <AccordionIcon src={downIcon} alt='Down Icon' />
        )}
      </AccordionButton>
      <AccordionContent expanded={expanded}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const AccordionWrapper = styled.div`
  margin-top: 20px;
`;

const AccordionButton = styled.button`
  display: inline-block;
  width: 35.2rem;
  height: 48px;
  margin-top: 0.3rem;
  border-radius: 1.2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background-color: #7353ea;
  color: #ffffff;
  padding: 11px 21px 9px 21px;
  cursor: pointer;

  &:hover {
    background: #5e3de4;
  }
  &:active {
    background: #532eda;
  }
`;

const AccordionIcon = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 0 0.4rem 0.7rem;
`;

const AccordionContent = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  animation: ${({ expanded }) => (expanded ? slideDown : slideUp)} 0.3s ease-in-out;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  overflow: hidden;
`;

export default SigninAccordion;
