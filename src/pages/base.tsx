
import React from 'react';

import SummaryTop from '../components/SummaryTop';
import UserData from '../pages/Users';

import { useTheme } from '../utils/ThemeContext';
import { Button, Div, H1, HR } from '../styles';

interface Props {
    theme: any
}

export default ((props:Props)=>{
    const themeToggle = useTheme();
    const switchTheme=()=>{
        themeToggle.toggle();
    }
  return (
    <Div className="uk-base uk-background-default">
        <H1 className="uk-heading-small uk-text-center">
          Data Board
        </H1>
        <div className="uk-container uk-text-center">
          <Button className="uk-flex-center" onClick={switchTheme}>
            {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </div>
        <HR className="uk-divider-icon"/>
        <SummaryTop show={false} />
        <UserData />
    </Div>
    )
});
