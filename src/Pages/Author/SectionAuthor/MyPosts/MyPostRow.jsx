import React from 'react';

const MyPostRow = (props) => {
    return (
        <div className="container">
        <div className="MyPostRow">
            <div className="row">
        <div className=" col-lg-4 col-md-5">
            <img src={props.img} alt="" />
        </div>
        <div className=" col-lg-8 col-md-7">
            <div className="Featured">
            <h6 className='h6'>{props.title}</h6>
            <h3>{props.interduction}</h3>
            <p>{props.details}</p>
            </div>
            </div>
            
        </div>
        </div>
        </div>
    );
}

export default MyPostRow;
