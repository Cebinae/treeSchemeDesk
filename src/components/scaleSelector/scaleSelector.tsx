import ScaleController from '../buttons/scaleController/scaleController'
import './scaleSelector.css'
import ScaleDropdown from '../scaleDropdown/scaleDropdown'
export default function ScaleSection() {
    return(
        <div className="scaleSection">
            <ScaleController increasing/>
            <ScaleDropdown/>
            <ScaleController decreasing/>

        </div>
    )
}