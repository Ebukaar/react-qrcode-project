import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const SMS: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [phonenum, setPhonenum] = useState(0); //A react hook useState that provides two variables one that holds the state and a function that updates the state.

    // This function will be called to update the State.
    const changePhonenum = (event: any) => {
        setPhonenum(event.target.value);
    }

    
    const [message, setmessage] = useState('');//A react hook useState that provides two variables one that holds the state and a function that updates the state.

    // This function will be called to update the State.
    const changemessage = (event: any) => {
        setmessage(event.target.value);  
    }
    
    return (

        <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <i><p className="title">SMS QR-Code Genrator</p></i>
        <i><p className="subtitle">Happy Generating...!!!</p></i>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">Phone Number:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Phone number" onInput={changePhonenum} />
                    {/* Upon entry of text which is the required type for this field, the OnInput event handler is fired up and it fires a function named changePhonenum.   */}
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label">Message: </label>
                    <div className="control">
                        <textarea className="textarea"  placeholder="Enter Message here" onInput={changemessage} />
                        {/* Upon entry of text which is the required type for this field, the OnInput event handler is fired up and it fires a function named changemessage.   */}
                    </div>
                </div>
            </div>
            <div>
                <br>
                </br>
            </div>
            <div>
                <QRCode value={`SMS: ${phonenum}:${message}`} size={256} />
            </div>
                
                

        </div>
        </div>
      </article>
    </div>

        
    )
}
export default SMS;

