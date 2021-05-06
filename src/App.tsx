import React from 'react';
import './App.css';
import URL from './components/UrlQRgenerator';
import Email from './components/EmailQRgenerator';
import SMS from './components/SmsQRgenerator';
// The above are the imported components.
const App: React.FC = () => {
 return (
 <div className="Container">
 <div className="Column1"> 
 <URL /> 
 {/* We have embedded the URL component in a div which has a classname column 1 */}
 </div>
 <div className="Column2">
 <SMS />
 {/* We have embedded the SMS component in a div which has a classname column 2 */}
 </div>
 <div className="Column3">
 <Email />
 {/* We have embedded the Email component in a div which has a classname column 3 */}
 </div>
 </div>
 );
}
export default App;



