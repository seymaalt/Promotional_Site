import React from 'react';
import TextContext from '../../context/TextContext';
import './style/template2.css'
import PublishContext from '../../context/PublishContext';
import { useContext } from "react";



const DataSecurity = ({ responseData }) => {
  const { response } = useContext(PublishContext)
  const { dataSecurity, setDataSecurity } = React.useContext(TextContext);


  return (
    <div className='divStyle'>
      <div className='titleStyle'>Veri Güvenliği</div>
        <div >
          <div className='DataSecP' style={{ fontFamily: response.designDataSecurity.font, color: `${response.designDataSecurity.color}`, fontSize: `${response.designDataSecurity.fontSize}px`, textAlign: `${response.designDataSecurity.textAlign}` }} > {response.dataSecurity == null ? 'response.dataSecurity' : response.dataSecurity}</div>
        </div>
    </div>
  );
}

export default DataSecurity;
