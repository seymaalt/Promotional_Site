import React, { useContext } from "react";
import { TextareaAutosize } from '@mui/base';
import TextContext from '../../context/TextContext'

const EditTabPromotionalSite = ({ responseData }) => {
    const { header, setHeader, discription, setDiscription, innovations, setInnovations, dataSecurity, setDataSecurity } = useContext(TextContext);

    function changeHeader(event) {
        setHeader(event)
    }
    function changeDiscription(event) {
        setDiscription(event)
    }
    function changeInnovations(event) {
        setInnovations(event)
    }
    function changeDataSecurity(event) {
        setDataSecurity(event)
    }

    return (
        <div className='editPage'>
            <div className='mgtop20'>
                <div>
                    <label>Header</label>
                    <TextareaAutosize
                        className="textArea"
                        id="header"
                        name="header"
                        onChange={(e) => changeHeader(e.target.value)}
                        defaultValue={header == null ? responseData.header : header}
                    />
                </div>
                <div className='mgtop20'>
                    <label>Discription</label>
                    <TextareaAutosize
                        className="textArea"
                        id="discription"
                        name="discription"
                        onChange={(e) => changeDiscription(e.target.value)}
                        defaultValue={discription == null ? responseData.description : discription}
                    />
                </div>
            </div>
            <div className='mgtop20'>
                <label>Innovations</label>
                <TextareaAutosize
                    className="textArea"
                    id="innovations"
                    name="innovations"
                    onChange={(e) => changeInnovations(e.target.value)}
                    defaultValue={innovations == null ? responseData.innovations : innovations}
                />
            </div>
            <div className='mgtop20'>
                <label>Data Security</label>
                <TextareaAutosize
                    className="textArea"
                    id="dataSecurity"
                    name="dataSecurity"
                    onChange={(e) => changeDataSecurity(e.target.value)}
                    defaultValue={dataSecurity == null ? responseData.dataSecurity : innovations}
                />
            </div>
        </div>
    );
};

export default EditTabPromotionalSite;
