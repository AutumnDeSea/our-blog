import React, {useState} from 'react'
import Lottie from 'react-lottie';
import * as animationData from './mob.json'
function  LottieControl () {  
  const [isStopped, setStop] = useState<boolean>(false)
  const [isPaused, setPaused] = useState<boolean>(false)
  const buttonStyle = {      
      display: 'block',     
      margin: '10px auto'    
    };   
  const defaultOptions = {      
    loop: true,      
    autoplay: true,      
    animationData: animationData,      
    rendererSettings: {       
    preserveAspectRatio: 'xMidYMid slice'      }   
  }; 
  const stop = ()=> {
    setStop(true)
  }
  const start = ()=> {
    setStop(false)
  }
  const pause = () => {
    setPaused(!isPaused)
  }
  return <>
    <div>      
        <Lottie options={defaultOptions}            
            height={400}             
            width={400}              
            isStopped={isStopped}              
            isPaused={isPaused}/>
        <button style={buttonStyle} onClick={stop}>stop</button>     
        <button style={buttonStyle} onClick={start}>play</button>      
        <button style={buttonStyle} onClick={pause}>pause</button>   
    </div>  
  </>
}
export default LottieControl