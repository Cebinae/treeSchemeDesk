'use client'

import './desk.css'
import PositionController from '../buttons/positionController/positionController'
import ThreeRoot from '../threeRoot/threeRoot'
import { useEffect, useRef } from 'react'

export default function Desk() {

    const desk = useRef<HTMLDivElement>(null)
    // const handleMouse = (ev:MouseEvent)=>{
    //     console.log(ev.clientY)

    // }

    // useEffect(()=>{
    //     if (!desk.current) return

    //     desk.current.addEventListener('mousemove', handleMouse)



    //     return ()=>{
    //         desk.current.removeEventListener('mousemove', handleMouse)

    //     }
    // },[])

    return (
        <main className="deskSurface" id='deskSurface' ref={desk as  React.RefObject<HTMLDivElement>}>
            <PositionController direction='top'/>
            <PositionController direction='bottom'/>
            <PositionController direction='left'/>
            <PositionController direction='right'/>
            <ThreeRoot deskRef={desk}></ThreeRoot>
        </main>
    )
}