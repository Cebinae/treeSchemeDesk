'use client'


import './nodeModal.css'
import { node } from '../../logic/schemaNode'


export default function NodeModal(props:{
    targetPool?:Array<object|undefined>, targetNode:node, forceUpdateParent:Function
}) {


    const handleCategory = ()=>{
        console.log('picked category')
        props.targetNode.type = 'category'
        props.forceUpdateParent()
    }

    const handleService = ()=>{
        console.log('picked service')
        props.targetNode.type = 'service'
        props.forceUpdateParent()


    }

    return (
        <div className='modalContainer'>
            <p className='label'>What do you want to create?</p>
            <div className='modalButtonsRow'>
                <div className='buttonWrapper' onClick={handleCategory}>
                    <p className='button'>CATEGORY</p>
                </div>
                <div className='buttonWrapper' onClick={handleService}>
                    <p className='button'>SERVICE</p>
                </div>           
            </div>           
        </div>
    )
}