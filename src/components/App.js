import React from 'react';
import PartnerList from './PartnerList'

const App = props => {
  return(
    <div>
    <h1 className="text-center callout"> Hiring Partners </h1>
    <h5 className="text-center"> We work with the very best.
    We are proud of our partners, who work with us to deliver
    the best training.</h5>
    <PartnerList
    partners={props.data}
    />
    </div>
  );
}

export default App;
