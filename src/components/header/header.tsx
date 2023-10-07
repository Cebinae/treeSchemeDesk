import './header.css'
import ServiceCounter from '../serviceCounter/serviceCounter'
import HeaderMenu from '../headerMenu/headerMenu'


export default function Header() {
    return(
        <header className='header'>
            {/* <p>HEADER</p> */}
            <ServiceCounter servicesCount={0}></ServiceCounter>
            <HeaderMenu/>
        </header>
    )
} 