import { useState } from 'react'


function App() {
  const [color, setColor] = useState("blue")

  return (
    <>

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white bottom-12 py-2 px-3 rounded-3xl'>
        <button 
        onClick={()=>setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}
        
        
        >Red</button>

<button 
        onClick={()=>setColor("pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "pink"}}
        
        
        >pink</button>

<button 
        onClick={()=>setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "green"}}
        
        
        >Red</button>

      </div>

      </div>
    </div>

    </>
  )
}

export default App
