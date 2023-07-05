import './Read.css'

const ColRead = (props) => {
    return (
            <div className="col-lg-4 col-md-4">
             <div className="card2">
                <img src={props.img} alt="" />
                <div className=" Featured">
                <h6>{props.title}</h6>
                <h4>{props.interduction}</h4>
                <p>{props.details}</p>
                </div>
                </div>
                 </div>
    );
}

export default ColRead;
