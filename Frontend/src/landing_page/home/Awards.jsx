import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5 p-5'>
          <div className='row'>
            <div className='col-6'>
                <img src='media/Images/largestBroker.svg'/>
            </div>
            <div className='homepage col-6 p-5 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                   <div className='col-6'>
                     <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            Currency derivatives
                        </li>
                     </ul>
                   </div>
                   <div className='col-6'>
                     <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            Bonds and Govt. securities
                        </li>
                     </ul>
                   </div>
                </div>
                <img src='media/Images/pressLogos.png' style={{ width:'90%'}}/>
            </div>
          </div>
        </div>
    );
}

export default Awards;