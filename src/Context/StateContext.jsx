import { createContext, useState, useContext, useRef } from 'react';
import buzzing from "/buzzing.mp3";
// Create the context
const PositionContext = createContext();

// Create a provider component
export const PositionProvider = ({ children }) => {
  const [loader, setLoader] = useState(true); // Default camera position or modal position
  const buzz = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const click = () => {
    handlePlay();
    setTimeout(() => {
      setLoader(false)
    }, 2000)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  const handlePlay = async () => {
    if (buzz.current && !isPlaying) {
      try {
        buzz.current.volume = 0; // Set initial volume to 0
        await buzz.current.play();
        setIsPlaying(true);
  
        const targetVolume = 1; // Desired maximum volume
        const increment = 0.01; // Amount to increase volume each step
        const duration = 2000; // Duration in milliseconds
        const intervalTime = 100; // Interval time in milliseconds
        const steps = duration / intervalTime; // Number of steps
        let currentStep = 0;
  
        const volumeInterval = setInterval(() => {
          if (currentStep < steps) {
            buzz.current.volume = Math.min(buzz.current.volume + increment, targetVolume);
            currentStep++;
          } else {
            clearInterval(volumeInterval); // Stop increasing volume when target reached
          }
        }, intervalTime);
        
      } catch (error) {
        console.error("Audio play failed:", error);
      }
    }
  };
  
  return (
    <PositionContext.Provider value={{ loader, setLoader }}>
      {children}
      {loader && <div style={{ zIndex: 9999 }} className="loader flex justify-center items-center fixed top-0 left-0 h-screen
       w-screen bg-yellow-500">
        <div onClick={click} className='text-4xl hover:text-[#2f5218] font-bold cursor-pointer'>
          Enter the World of Bees.<span className='animate-ping'>.</span><span className='animate-ping'>.</span>
        </div>
      </div>}
      <audio ref={buzz} src={buzzing} loop />

    </PositionContext.Provider>
  );
};

// Custom hook to use the PositionContext
export const usePosition = () => {
  return useContext(PositionContext);
};
