import { node } from "../../logic/schemaNode"
import './node.css'
import NodeModal from "../nodeModal/nodeModal"
import { useState, useCallback } from 'react';
import CreateNodeBtn from "../buttons/createNode/createNode";
import DefinedNode from "../definedNode/definedNode";

export default function Node(props:{nodeToRender:node}) {
    const [, updateState] = useState({});
    const forceUpdate = useCallback(() => updateState({}), []);

    return (

        
        <>
        {props.nodeToRender.type!=='category'&&props.nodeToRender.type!=='service'? <NodeModal targetNode={props.nodeToRender} forceUpdateParent={forceUpdate}></NodeModal>:<DefinedNode nodeToRender={props.nodeToRender}></DefinedNode>}
        

        
        </>
    )
}