import './Title.css'

const LiftTitle = (props) => {
    return (
            <div className='title Lift-Title container'>
             <h3>{props.children}</h3> 
        </div>
    );
}

const CenterTitle = (props) => {
    return (
            <div className='title Center-Title container'>
             <h3>{props.children}</h3> 
        </div>
    );
}


export default LiftTitle
export {CenterTitle}
