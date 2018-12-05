import React from 'react';
import ControlsPhoto from '../Container/ControlsPhoto';
import '../Styles/ResultItem.css';

const ResultItem = (result, mood) => {
    return (
      <figure className='result-item'>
        <div className="box-image">
          <img src={result.result.url_image} alt="" />
        </div>  
        <ControlsPhoto></ControlsPhoto>
        <figcaption>{result.mood}</figcaption>
      </figure>
    ); 
}

export default ResultItem;
