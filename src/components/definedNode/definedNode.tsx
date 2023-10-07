import { node } from "../../logic/schemaNode";
import './definedNode.css'
import Node from "../schemaNode/node";
import CreateNodeBtn from "../buttons/createNode/createNode";
import { useState, useCallback } from "react";
import SubmitBtn from "../buttons/submit/submitBtn";
import CancelBtn from "../buttons/cancel/cancel";

export default function DefinedNode(props:{nodeToRender:node}) {


    const [, updateState] = useState({});
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleCreate = ()=>{
        console.log('calllback invoked')
        props.nodeToRender.createChild('', '')
        forceUpdate()
    }



    return(

        
        <div className="nodeContainer">
            {/* <p className="label">{props.nodeToRender.type}</p> */}

            <input className="input" type='text' placeholder={`${props.nodeToRender.type==='category'?'Category':'Service'} name`}></input>
            <div className="buttonsssRow">
                {/* <p style={{color:'black', }}>SADsssssssssssssss</p> */}
                <CreateNodeBtn callback={handleCreate}></CreateNodeBtn>
                <SubmitBtn></SubmitBtn>
                <CancelBtn></CancelBtn>
            </div>
            
            {/* <div className='childrenRow'>

                {props.nodeToRender.children.map((node:any)=>{
                    return <Node nodeToRender={node}></Node>
                })}
            </div>    */}
       </div>
    )
}