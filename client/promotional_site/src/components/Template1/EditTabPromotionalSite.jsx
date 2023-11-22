import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import TextContext from '../../context/TextContext'

const EditTabPromotionalSite = ({ responseData }) => {
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
        <div>
            <div className='mgtop20'>
                <div>
                    <label>Header</label>
                    <div >
                        <TextField
                            style={{ width: '90%', marginLeft: '15px' }}
                            id="header"
                            name="header"
                            onChange={(e) => changeHeader(e.target.value)}
                            multiline
                            rows={2}
                            defaultValue={responseData.header}
                        />
                    </div>
                </div>
                <div className='mgtop20'>
                    <label>Discription</label>
                    <div >
                        <TextField
                            style={{ width: '90%', marginLeft: '15px' }}
                            id="discription"
                            name="discription"
                            onChange={(e) => changeDiscription(e.target.value)}
                            multiline
                            rows={8}
                            defaultValue={responseData.description}
                        />
                    </div>
                </div>
            </div>
            <div className='mgtop20'>
                <label>Innovations</label>
                <div>
                    <TextField
                        style={{ width: '90%', marginLeft: '15px' }}

                        id="innovations"
                        name="innovations"
                        onChange={(e) => changeInnovations(e.target.value)}
                        multiline
                        rows={8}
                        defaultValue={responseData.innovations}
                    />
                </div>
            </div>
            <div className='mgtop20'>
                <label>Data Security</label>
                <div >
                    <TextField
                        style={{ width: '90%', marginLeft: '15px' }}
                        id="dataSecurity"
                        name="dataSecurity"
                        onChange={(e) => changeDataSecurity(e.target.value)}
                        multiline
                        rows={8}
                        defaultValue={responseData.dataSecurity}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditTabPromotionalSite;
