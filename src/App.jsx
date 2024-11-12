
import { useRef } from 'react'
import './App.css'

function App() {

  let dropRef = useRef(null)

  let dropIt = ()=>{
    // console.log(dropRef.current);
    // dropRef.current.style.display= 'block';
    if (dropRef.current.style.display == 'block') {
        dropRef.current.style.display = 'none'
    } else {
      dropRef.current.style.display = 'block'
    }
    
  }

  return (
    <>
      <div className="max-w-28 mx-auto pt-8" onClick={dropIt}>
        <button className='py-2 px-4 bg-rose-600 text-white rounded-lg'>Click</button>
        <div className="bg-lime-600 text-center rounded-md hidden" ref={dropRef}>
          <ul>
            <li>Desktop</li>
            <li>Laptop</li>
            <li>Components</li>
            <li>Accessories</li>
            <li>Monitor</li>
            <li>UPS</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
