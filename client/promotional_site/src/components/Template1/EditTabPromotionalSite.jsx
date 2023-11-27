import React, { useContext } from "react";
import { TextareaAutosize } from '@mui/base';
import TextContext from '../../context/TextContext'

const EditTabPromotionalSite = ({ responseData, colorData }) => {
    const { setHeader, setDiscription, setInnovations, setDataSecurity } = useContext(TextContext);

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
        <div className="editPage">
            <div className='mgtop20'>
                <div>
                    <label>Header</label>
                    <TextareaAutosize
                        style={{ '--border-color': colorData }}
                        className="textArea"
                        id="header"
                        name="header"
                        onChange={(e) => changeHeader(e.target.value)}
                        defaultValue={responseData.header}
                    />
                </div>
                <div className='mgtop20'>
                    <label>Discription</label>
                    <TextareaAutosize
                        style={{ '--border-color': colorData }}
                        className="textArea"
                        id="discription"
                        name="discription"
                        onChange={(e) => changeDiscription(e.target.value)}
                        defaultValue={responseData.description}
                    />
                </div>
            </div>
            <div className='mgtop20'>
                <label>Innovations</label>
                <TextareaAutosize
                    style={{ '--border-color': colorData }}
                    className="textArea"
                    id="innovations"
                    name="innovations"
                    onChange={(e) => changeInnovations(e.target.value)}
                    defaultValue={responseData.innovations}
                />
            </div>
            <div className='mgtop20'>
                <label>Data Security</label>
                <TextareaAutosize
                    style={{ '--border-color': colorData }}
                    className="textArea"
                    id="dataSecurity"
                    name="dataSecurity"
                    onChange={(e) => changeDataSecurity(e.target.value)}
                    defaultValue={responseData.dataSecurity}
                />
            </div>
        </div>
    );
};

export default EditTabPromotionalSite;
