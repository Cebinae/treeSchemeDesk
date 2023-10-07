import './cancel.css'

export default function CancelBtn(props:{
    callback?:Function
}) {
    return(
        <div className="cancelBtn">
            <span className="material-symbols-outlined" style={{color:'white'}}>close</span>
        </div>
    )
}