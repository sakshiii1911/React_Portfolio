import React from 'react';

function Certificates({ data }) {
    return (
        <>
            <h2 className='headingTwo'>Certificates</h2>
            <div className='container'>
                <div className="row">
                    {
                        data.map((cer, i) => (
                            <div className="col" key={i}>
                                <div className="card text-bg-primary mb-3 w-80" style={{ width: '18rem' }}>
                                    <div className="card-body">
                                        <h4 className="card-title p-2">{cer.title}</h4>
                                        <h6 className="card-subtitle mb-2 ">{cer.organization}</h6>
                                        <p className="card-text mb-3">With supporting text below as a natural lead-in to additional content.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    );
}

export default Certificates;    