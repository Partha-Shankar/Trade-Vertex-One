import React from 'react';

function Stats() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6 me-5 mb-5'>
                    <h2 className='mb-5 text-center' style={{fontSize:"2rem"}}>Trust with confidence</h2>
                    <h3 style={{fontSize:"1.5rem"}}>Customer-first always</h3>
                    <p className='mb-3 text-muted'>That's why 1.3+ crore customers trust Trade Vertex One with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h3 style={{fontSize:"1.5rem"}}>No spam or gimmicks</h3>
                    <p className='mb-3 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 style={{fontSize:"1.5rem"}}>The Trade Vertex One universe</h3>
                    <p className='mb-3 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 style={{fontSize:"1.5rem"}}>
                        Do better with money
                    </h3>
                    <p className='text-muted mb -5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-5 ms-5'>
                    <img src = 'media/images/ecosystem.png' height='440' alt='ecosystem'></img>
                    <div className='ms-5 mt-2 mb-5'> 
                        <a href='#' style={{textDecoration:"none"}} className='mx-5'>Explore our products <i className="fa-solid fa-arrow-right"></i> </a>
                        <a href='#' style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;