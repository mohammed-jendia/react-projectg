


const PostRowCatacory = (props) => {
    return (
        <div className='PostRowCatacory'>

                <div className="row">
            <div className=" col-lg-4 col-md-4 col-sm-12">
                <div className="img-catadory">
                <img src={props.img} alt="" />
                </div>
            </div>
            <div className=" Featured col-lg-8 col-md-8 col-sm-12">
                <h6 className='h6'>{props.title}</h6>
                <h3>{props.interduction}</h3>
                <p>{props.details}</p>
            </div>
            </div>

                </div>
    );
}

export default PostRowCatacory;
