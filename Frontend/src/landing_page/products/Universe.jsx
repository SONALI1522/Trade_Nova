import React from 'react';
function Universe() {
    return (  
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/smallcaseLogo.png' 
                     style={{height: '55px', maxWidth:'100%'}}
                    />
                    <p className='text-small text-muted'>
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/streakLogo.png'
                     style={{height: '55px', maxWidth:'100%'}}
                    />
                    <p className='text-small text-muted'>
                        Systematic trading platform
                        strategies without coding.
                        that allows you to create and backtest
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/sensibullLogo.svg'
                     style={{height: '40px', maxWidth:'100%'}}
                    />
                    <p className='text-small text-muted'>
                       Options trading platform that lets you
                       create strategies, analyze positions, and examine
                       data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/zerodhaFundhouse.png'
                     style={{height: '55px', maxWidth:'100%'}}
                    />
                    <p className='text-small text-muted'>
                       Our asset management venture
                       that is creating simple and transparent index
                       funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/goldenpiLogo.png'
                     style={{height: '55px', maxWidth:'100%'}}
                    />
                    <p className='text-small text-muted'>
                      GoldenPi is an online bond trading platform that allows investors to discover, analyze, and invest in fixed-income securities such as bonds, debentures, and government instruments. It simplifies bond investing by offering transparent pricing, easy comparisons, and direct access to high-quality debt products, helping investors diversify their portfolios with stable returns.  
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/dittoLogo.png'
                     style={{height: '55px', maxWidth:'100%'}}
                    />
                    <p className='text-small text-muted'>  
                      Personalized advice on life
                      and health insurance. No spam
                      and no mis-selling.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Universe;