import './serviceCounter.css'


export default function ServiceCounter (props:{
    servicesCount:number
}) {
    
return(
    <div className="counterWrapper">
        <p className="servicesLabel">Services</p>
        <p className="servicesNumber">{props.servicesCount.toString()}</p>
        {/* <div className='numberContainer'></div> */}
    </div>
)
}