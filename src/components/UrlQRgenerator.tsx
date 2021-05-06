import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

// This is a functional component
const URL: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [link, setLink] = useState(''); //A react hook use state that provides two variables one that holds the state and a function that updates the state.

    // This function will be called to update the State.
    const changeLink = (event: any) => {
        setLink(event.target.value); 
    }
    
    return (

        <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <i><p className="title">Url QR-Code Generator</p></i>
        <i><p className="subtitle">Happy Generating...!!!</p></i>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">URL:</label>
                <div className="control">
                    {/* Upon entry of text which the required type for this field, the OnInput event handler is fired up and it fires a function named ChangeLink.  */}
                    <input className="input" type="text" placeholder="Enter Url" onInput= {changeLink} />
                </div>
            </div>
            


                {/* Besides size, you can set more properties for QRCode, including logo image overlay. See  https://www.npmjs.com/package/qrcode.react*/}
                <QRCode value={link} size={256} fgColor="black" /> 


                {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

            </div>
        </div>
      </article>
    </div>
  

        
       
    )
}
export default URL;

