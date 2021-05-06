import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Email: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [mailto, setMailto] = useState(''); //A react hook useState that provides two variables one that holds the state and a function that updates the state.


    // This function will be called to update the State.
    const changeMailto = (event: any) => {
        setMailto(event.target.value);
    }



    const [subject, setSubject] = useState('');//A react hook useState that provides two variables one that holds the state and a function that updates the state.


    // This function will be called to update the State.
    const changeSubject = (event: any) => {
        setSubject(event.target.value);
    }


    const [body, setBody] = useState('');//A react hook useState that provides two variables one that holds the state and a function that updates the state.


    // This function will be called to update the State.
    const changeBody = (event: any) => {
        setBody(event.target.value);
    }

    return (
        <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <i><p className="title">Mail QR-Code Generator</p></i>
        <i><p className="subtitle">Happy Generating....!!!</p></i>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">Mail To:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Receipient" onInput={changeMailto} />
                    {/* Upon entry of text which is the required type for this field, the OnInput event handler is fired up and it fires a function named changeMailto. */}
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label">Subject: </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter Subject" onInput={changeSubject} />
                        {/* Upon entry of text which is the required type for this field, the OnInput event handler is fired up and it fires a function named changeSubject. */}
                    </div>
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label"> Body: </label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Enter Mail" onInput={changeBody} />
                        {/* Upon entry of text which is the required type for this field, the OnInput event handler is fired up and it fires a function named changeBody. */}
                    </div>
                </div>
            </div>
            <div>
                <br></br>
            </div>

            <div>
                { <QRCode value={`mailto: ${mailto}?subject=${subject}&body=${body}`} size={256} /> }
            </div>
                
        </div>
          
        </div>
      </article>
    </div>
        
    )
}
export default Email;

