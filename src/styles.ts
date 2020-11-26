import styled from 'styled-components';
import { 
    buttonBackgroundColor, buttonTextColor, backgroundColor, textColor 
  } from './utils/theme';

const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  const Div = styled.body` 
  background: ${backgroundColor};
  `;
  
  const H1 = styled.h1`
    color: ${textColor};
  `;
  
  const H3 = styled.h3`
    color: ${textColor};
  `;
  
  const HR = styled.hr`
    color: ${textColor};
  `;

export {Button, Div, H1, H3, HR};
