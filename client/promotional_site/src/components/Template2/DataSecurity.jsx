import React from 'react';

const DataSecurity = ({ responseData }) => {



  return (
    <div className='divStyle'>
      <div className='titleStyle'>Veri Güvenliği</div>
      <p className='DataSecP'> {responseData.dataSecurity}</p>
    </div>
  );
}

export default DataSecurity;
