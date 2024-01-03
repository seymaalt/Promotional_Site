import React from 'react';
import TextContext from '../../context/TextContext';
import './style/template2.css'




const DataSecurity = ({ responseData }) => {
  const { dataSecurity, setDataSecurity } = React.useContext(TextContext);


  return (
    <div className='divStyle'>
      <div className='titleStyle'>Veri Güvenliği</div>
        <div >
          <div className='DataSecP' style={{ fontFamily: designDataSecurity.font, color: `${designDataSecurity.color}`, fontSize: `${designDataSecurity.fontSize}px`, textAlign: `${designDataSecurity.textAlign}` }} > {dataSecurity == null ? responseData.dataSecurity : dataSecurity}</div>
        </div>
    </div>
  );
}

export default DataSecurity;
