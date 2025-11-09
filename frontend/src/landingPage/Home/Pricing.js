import React from 'react';

function Pricing() {
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-5'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"none"}}>See Pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2 me-5'></div>
                <div className='col-4 ms-5'>
                    <div className='row'>
                        <div className='col-6 border p-4 text-center'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 border p-4 text-center'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;