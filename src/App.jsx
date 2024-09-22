import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Conservation from "./Components/Conservation";
import Products from "./Components/Products";

import BeeModal from "./Components/BeeModal";
// import { OrbitControls } from "@react-three/drei";


const App = () => {
  const container = useRef();
  


  return (
    <div  ref={container} className="overflow-hidden relative">
      <div className="z-50 fixed left-0 top-0 w-full h-screen">
        <Canvas camera={{ fov: 10, position: [20, 0, 40] }}>
          {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ambientLight intensity={0.5} />

          <BeeModal />
        </Canvas>
      </div>

     

      <Home />


      <About />


      <Conservation />


      <Products />

      <div style={{ zIndex: 9999 }} className='text-[15px] fixed bottom-[10px] left-[10px] text-white bg-gray-600 p-2 rounded'>
        <a className='hover:text-[#FFDD00]' href="https://hitesh-folio.vercel.app/" target="_blank" rel="noopener noreferrer"> <h1>Hitesh Saini ❤️</h1></a>
        <a className='hover:text-[#FFDD00] text-blue-600'  href="https://www.linkedin.com/in/hitesh-saini09/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>




    </div>
  );
};

export default App;
