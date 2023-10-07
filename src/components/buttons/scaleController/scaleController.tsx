import './scaleController.css'

export default function ScaleController(props:{
    decreasing?:boolean, increasing?:boolean
}) {
    return(

        <div className="scaleController">
            {props.decreasing? <span className="material-symbols-outlined">add</span>:null}
            {props.increasing? <span className="material-symbols-outlined">remove</span>:null}
        </div>
    )
}