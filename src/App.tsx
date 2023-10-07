import './App.css'
import Header from './components/header/header'
import Desk from './components/desk/desk'

function App() {

  document.addEventListener('keydown', (event)=>{
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ))  
      //  alert('disabling zooming'); 
      event.preventDefault();
  })

  window.addEventListener('wheel', (ev)=>{
    if (ev.ctrlKey == true) {
      // alert('disabling zooming'); 
  ev.preventDefault();
  ev.stopPropagation();
    }}, {passive:false})

  return (
   <div className='rootWrapper'>
      <Header/>
      <Desk/>
   </div>
  )
}

export default App
