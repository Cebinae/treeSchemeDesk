import './submit.css'


export default function SubmitBtn (props:{
    callback?: Function
}){
    return (
        <div className="submitBtn">
            <span className="material-symbols-outlined" style={{color:'white'}}>done</span>
        </div>
    )
}