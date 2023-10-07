'use client'
import './createNode.css'
import NodeModal from '../../nodeModal/nodeModal'
import { node } from '../../../logic/schemaNode'

export default function CreateNodeBtn (
    props:{
    callback:Function, forceUpdateParent?: Function, parentPool?:Array<object|undefined>
}
){

    const clickHandler = ()=> props.callback()
    
    

    return(
        <div className="createNodeBtn">
            <span className="material-symbols-outlined" style={{color:'white'}} onClick={clickHandler}>add</span>
            {/* <NodeModal></NodeModal> */}
        </div>
    )
}