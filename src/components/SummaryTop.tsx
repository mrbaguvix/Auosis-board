import React from 'react';
import {HR, H3} from '../styles';

interface Props {
  show: boolean;
}

const Summary = (props:Props) => {

  return (
    props.show ? (
      <>
    <div className="uk-container">
      <div className="uk-margin" data-uk-grid>
      <div className="uk-width-1-3@m uk-width-1-1@s">
        <div className="uk-card uk-card-body">
          <H3 className="uk-card-title">
            Total Students
      </H3>
          <p>
          </p>
        </div>
      </div>
      <div className="uk-width-1-3@m uk-width-1-1@s">
        <div className="uk-card uk-card-body">
          <H3 className="uk-card-title">
            Total Male
      </H3>
          <p>
            
          </p>
        </div>
      </div>

      <div className="uk-width-1-3@m uk-width-1-1@s">
        <div className="uk-card uk-card-body">
          <H3 className="uk-card-title">
            Total Female
      </H3>
          <p>
            
          </p>
        </div>
      </div>
    </div>
    </div>
    <HR className="uk-divider-icon"/>
    </>
    ) : null
  )
};

export default Summary;
