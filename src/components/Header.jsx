import React from 'react';
import femaleicon from '../assets/femaleicon.png';

function Header({ data }) {
  return (
    <>
        <div className="container d-flex justify-content-between align-items-center ">
            <div className="row m-5">
            <div className="col">
                <h1>{data.name}</h1>
                <p>{data.about}</p></div>
            <div className="col">
                <img src={femaleicon} alt='icon' className='ficon'></img>
            </div>  
        </div>
        </div>

    </>
  );
}

export default Header;