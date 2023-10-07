import './headerMenu.css'
import ViewList from '../buttons/viewList/viewList.tsx'
import AlignBtn from '../buttons/alignSchema/alignBtn.tsx'
import ScaleSection from '../scaleSelector/scaleSelector.tsx'


export default function HeaderMenu (){
    return (
        <menu className="menuWrapper">

            <ViewList/>
            <AlignBtn/>
            <ScaleSection/>
        </menu>
    )
}