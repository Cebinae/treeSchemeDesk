import './positionController.css'

export default function PositionController(props:{
    direction:string
}) 
{
    let angle = 0 

    switch (props.direction) {
        case 'top': 
            angle = 0
            break;
        case 'bottom': 
            angle = 180
            break; 
        case 'left': 
            angle = 270
            break;
        case 'right': 
            angle = 90
            break;
        default:
            break;
    }
    return(
        <div className={`positionController controller_${props.direction}`} style={{transform:`rotate(${angle}deg)`}}>
            <span className="material-symbols-outlined" style={{color:'white'}}>expand_less</span>
        </div>
    )
}