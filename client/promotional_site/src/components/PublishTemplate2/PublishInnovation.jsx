import React, { useState,useEffect, useContext } from 'react';
import TextContext from '../../context/TextContext';
import './style/template2.css'


const Innovation = () => {
  const { innovations, setInnovations } = React.useContext(TextContext);

  return (
    <div>
      <div className='divStyle'>
        <div className='titleStyle'>Yenilikler</div>
          <div >
            <p className='DataSecP' style={{ fontFamily: designInnovation.font, color: `${designInnovation.color}`, fontSize: `${designInnovation.fontSize}px`, textAlign: `${designInnovation.textAlign}` }} > {innovations == null ? responseData.innovations : innovations}</p>
          </div>
      </div>
    </div>
  );
}

export default Innovation;
