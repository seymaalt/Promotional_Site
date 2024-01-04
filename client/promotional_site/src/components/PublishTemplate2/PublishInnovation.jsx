import React, { useState,useEffect, useContext } from 'react';
import TextContext from '../../context/TextContext';
import './style/template2.css'
import PublishContext from '../../context/PublishContext';


const Innovation = () => {
  const { response } = useContext(PublishContext)
  const { innovations, setInnovations } = React.useContext(TextContext);

  return (
    <div>
      <div className='divStyle'>
        <div className='titleStyle'>Yenilikler</div>
          <div >
            <p className='DataSecP' style={{ fontFamily: response.designInnovations.font, color: `${response.designInnovations.color}`, fontSize: `${response.designInnovations.fontSize}px`, textAlign: `${response.designInnovations.textAlign}` }} > {response.innovations == null ? 'response.innovations' : response.innovations}</p>
          </div>
      </div>
    </div>
  );
}

export default Innovation;
