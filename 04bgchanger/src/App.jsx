// import { useState } from 'react'
// // import './App.css'

// function App() {
//   const [color, setcolor] = useState("olive");

//   return (
//     <>
//      <div className='w-full h-screen '
//       style={{ backgroundColor:color}}>

//        <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>

//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

//           <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
//           style={{backgroundColor:"red"}}
//           >Red</button>
//           <button onClick={()=>setcolor("green")}className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
//           style={{backgroundColor:"green"}}
//           >Green</button>
//           <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
//           style={{backgroundColor:"blue"}}
//           >Blue</button>
//           <button onClick={()=>setcolor("yellow")}className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
//           style={{backgroundColor:"yellow"}}
//           >Yellow</button>

//           </div>
//        </div>
//      </div>
//     </>
//   )
// }
// export default App



import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  // Function to handle color change
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const colorButtons = ["red", "green", "blue", "yellow","violet","orange","purple","pink","black","cyan"];

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            
            {/* Button for each color */}
            {/* {colorButtons.map((btnColor) => (  can also be used like array calling. */}
            {/* {["red", "green", "blue", "yellow"].map((btnColor) => ( */}
            {colorButtons.map((btnColor) => (
              <button
                key={btnColor}
                onClick={() => handleColorChange(btnColor)}
                className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
                style={{ backgroundColor: btnColor }}
              >
                {btnColor.charAt(0).toUpperCase() + btnColor.slice(1)}
              </button>
            ))}
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

