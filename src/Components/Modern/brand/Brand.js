import React from 'react';
import './../brand/brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';


const Brand = () => (
    <div className="gpt3__brand section__padding">
      <div>
        <img alt="" src={google} />
      </div>
      <div>
        <img alt="" src={slack} />
      </div>
      <div>
        <img alt="" src={atlassian} />
      </div>
      <div>
        <img alt="" src={dropbox} />
      </div>
      <div>
        <img alt="" src={shopify} />
      </div>
    </div>
  );
  
  export default Brand;