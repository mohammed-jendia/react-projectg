

const PostRow = (props) => {
    return (
        <div>
            
            <div className="row">
            <div className=" col-lg-5 col-md-5">
                <img src={props.img} alt="" />
            </div>
            <div className=" Featured col-lg-7 col-md-7">
                <h6 className='h6'>{props.title}</h6>
                <h3>{props.interduction}</h3>
                <p>{props.details}</p>
            </div>
            </div>

        </div>
    );
}

export default PostRow;
