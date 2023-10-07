'use client'

import './threeRoot.css'
import  { useRef, useEffect, useState, useCallback } from 'react'
import CreateNodeBtn from '../buttons/createNode/createNode'
import SchemaNode from '../../logic/schemaNode'
import Node from '../schemaNode/node'


export default function ThreeRoot (props:{
    deskRef?:React.RefObject<HTMLDivElement>
}){

    const isClicked = useRef<boolean>(false)
    const threeRoot = useRef<HTMLDivElement>(null)

    const currPos = useRef<{startPosX:number, startPosY:number, lastPosX:number, lastPosY:number}>({ 
            startPosX:0,
            startPosY:0,
            lastPosX:0,
            lastPosY:0
        })
  
    const counter = useRef(0)
    useEffect(()=>{
        if (!props.deskRef?.current|| !threeRoot.current) return

        const desk = props.deskRef.current
        const root = threeRoot.current

        const handlePressOut = ()=>{
            isClicked.current=false
            currPos.current.lastPosX = root.offsetLeft
            currPos.current.lastPosY = root.offsetTop
            console.log('released')
        }

        const handlePressIn = (ev:MouseEvent)=>{
            if (!threeRoot.current) return
            isClicked.current=true
            currPos.current.startPosX = ev.clientX
            currPos.current.startPosY = ev.clientY
            console.log('Clicked')
        }

        const handleMouse = (ev:MouseEvent)=>{
            if (!isClicked.current) return;
                console.log(ev.clientY)
    
            const nextX = ev.clientX - currPos.current.startPosX + currPos.current.lastPosX
            const nextY = ev.clientY - currPos.current.startPosY + currPos.current.lastPosY
    

            console.log("values on X: ",currPos.current.startPosX, 'and ', currPos.current.lastPosX)
            console.log("values on Y: ",currPos.current.startPosY, 'and ', currPos.current.lastPosY)


            root.style.top = `${nextY}px`
            root.style.left = `${nextX}px`
        }
    

        desk.addEventListener('mousemove', handleMouse)
        root.addEventListener('mousedown', handlePressIn)
        root.addEventListener('mouseup', handlePressOut)


        // here we need to set an initial position of root element to a ref for later calculations !!!

        currPos.current.lastPosX = root.offsetLeft
        currPos.current.lastPosY = root.offsetTop


        return ()=>{
            if (!props.deskRef?.current|| !threeRoot.current) return
            desk.removeEventListener('mousemove', handleMouse)
            root.removeEventListener('mousedown', handlePressIn)
            root.removeEventListener('mouseup', handlePressOut)
        }
    },[])


    // const [rootPool, setPool] = useState([])
    const rootPool = useRef([])

    // const addRootItem = (title:string)=>{
    //         setPool((prevstate)=>{
    //             let prev = Object.assign(prevstate)
    //             prev.push(title)
    //             return prev
    //         })
    // }

    const [, updateState] = useState({});
    const forceUpdate = useCallback(() => updateState({}), []);


    const createAfterRootNode = (title?:string, type?:string, targetPool?:Array<object> )=>{
        console.log('ITEM CREATION HAS BEEN CALLED')
        const newItem = new SchemaNode (type?type:'noTypeProvided', targetPool, title?title:'no title was provided' )
        targetPool?targetPool.push(newItem) : console.log('error, cant access target array to push new item')
        counter.current++
        forceUpdate()
    }

    // const pushToRootPool = (newItem:object)=>{

    // }

    // let testArr = []

    
    return(
        <div className="three" id='threeRoot' ref={threeRoot}>
            <div className='threeRootContainer'>
                <div className="threeRoot">
                    <p> CATEGORIES</p>
                </div>
                {/* <p style={{color:'black'}}>huy</p> */}
                <CreateNodeBtn callback={()=>createAfterRootNode(`huy${counter.current}`, 'not', rootPool.current)} parentPool={rootPool.current}/>

                <p style={{color:'black', fontSize:'30px'}} onClick={()=>console.log(rootPool.current)}>{rootPool.current.length}</p>
            </div>   

            <div className='childrenRow'>
                {/* <p style={{color:'black'}}>huy</p> */}

                {rootPool.current.map((node:any)=>{
                    // return <p key={node.key} style={{color:'black'}}>{node.title}</p>
                    return <Node nodeToRender={node}></Node>
                })}
            </div>         

        </div>
    )
}