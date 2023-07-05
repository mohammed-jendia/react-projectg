import './Buttons.css';

const YellowButton = (props) => {
    return (

            <div className='button yellow-Button'>
           <a href='/#'>{props.children}</a> 
        </div>

    )
}

const WhiteButton = (props) => {
    return (
            <div className='button White-Button'>
           <a href='/#'>{props.children}</a> 
        </div>
        
    )
}

export default YellowButton
export  {WhiteButton}

