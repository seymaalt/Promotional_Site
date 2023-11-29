import React from 'react';

const Innovation = ({ responseData }) => {



  return (
    <div className='divStyle'>
      <div className='titleStyle'>Yenilikler</div>
      <p className='DataSecP'> {responseData.innovations}</p>
    </div>
  );
}

export default Innovation;
