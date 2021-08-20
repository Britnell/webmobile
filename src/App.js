import React from 'react';
import './App.css';


function useEventListener(name,callback,options){
  React.useEffect(()=>{
    window.addEventListener(name,callback,options);
    return ()=> window.removeEventListener(name,callback)
  },[callback])
}

function useDeviceOrientation(callback,dependencies){
  useEventListener('deviceorientation',React.useCallback(callback,dependencies))
}

function useDeviceMotion(callback,dependencies){
  useEventListener('devicemotion', React.useCallback(callback,dependencies));
}

function useForegroundDetection(callback,dependencies){
  useEventListener('visibilitychange', React.useCallback(callback,dependencies));
}

function usePointer(down,move,up){
  // * start
  useEventListener('touchstart',(ev)=>{
    down(ev)
    return false;
  })
  // * move
  const onMove = React.useCallback((ev)=>{
    if(ev.touches.length>1) ev.preventDefault()
    move(ev)
  },[move])
  React.useEffect(()=>{
    window.addEventListener('touchmove',onMove,{passive:false});
    return ()=> window.removeEventListener('touchmove',onMove)
  },[onMove])
  // * End
  useEventListener('touchend',(ev)=>{
    up(ev)
    return false;
  })
}

function useClipboard(callback,dep){
  useEventListener('copy',React.useCallback(callback,dep) )
  useEventListener('paste',React.useCallback(callback,dep) )
}

function quickShow(obj){
  let res = []
  if(!obj)      return;
  return Object.keys(obj).map((k,i)=><div> {k} : {obj[k]}</div>)
}



function One({nextLevel}){
  const [orientation,setOrientation] = React.useState(()=>{
    if (!'DeviceOrientationEvent' in window) {
      return 'X'
    }
  })

  function onOrientationData(ev){
    let data = {
      a: ev.alpha,
      b: ev.beta,
      g: ev.gamma,
    }
    setOrientation(data)  
    //
  }
  
  useDeviceOrientation(onOrientationData,[])


  return (<div>
    <div>One</div>
    <div>Orientation</div>
    <div>{quickShow(orientation)}</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}

function Two({nextLevel}){
  const [imu,setImu] = React.useState()

  function onMotionData(ev){
    let data = {
      acc: {
        x: ev.accelerationIncludingGravity.x,
        y: ev.accelerationIncludingGravity.y,
        z: ev.accelerationIncludingGravity.z
      },
      nograv: {
        x: ev.acceleration.x,
        y: ev.acceleration.y,
        z: ev.acceleration.z
      },
      gyro: {
        x: ev.rotationRate.alpha,
        y: ev.rotationRate.beta,
        z: ev.rotationRate.gamma
      },
    }
    setImu(data)
  }

  useDeviceMotion(onMotionData,[])

  let acc, nograv, gyro
  if(imu && imu.acc)  acc = imu.acc
  if(imu && imu.nograv)  nograv = imu.nograv
  if(imu && imu.gyro)  gyro = imu.gyro

  return (<div>
    <div>Two</div>
    <div>ACC </div>
    <div>{quickShow(acc)}</div>
    <div>No gravity</div>
    <div>{quickShow(nograv)}</div>
    <div>Gyro</div>
    <div>{quickShow(gyro)}</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}


function Three({nextLevel}){
  const [foreground,setForeground] = React.useState('active')

  function onForegroundChange(){
    if(document['hidden']){
      setForeground(` You left at ${new Date()} `)
    }
  }

  useForegroundDetection(onForegroundChange,[])

  return (<div>
    <div>Three</div>
    <div> In/Activeness</div>
    <div>{foreground}</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}

function Four({nextLevel}){
  const [touch,setTouch] = React.useState()
  
  usePointer(
    ()=>setTouch('start'),
    (ev)=>{
      let tch = `${ev.touches[0].clientX},${ev.touches[0].clientY} `
      let snd;
      if(ev.touches.length>1)
        snd = `${ev.touches[1].clientX},${ev.touches[1].clientY} `
      
      setTouch(`move ${tch} \t  ${snd} `)
    },
    ()=>setTouch('end')
  )
  

  return (<div>
    <div>Four</div>
    <div>{touch}</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}


function Five({nextLevel}){
  const [clipb,setClipb] = React.useState()

  useClipboard((ev)=>{
    if(ev.type==='copy'){
      let txt = document.getSelection().toString()
      if(txt.length>0)
        setClipb(` Copied : ${txt}`)
      navigator.clipboard.writeText(`"${txt}"`)
    }
    else if(ev.type==='paste'){
      let txt = ev.clipboardData.getData('text/plain')
      setClipb(` Pasted : ${txt} `)
    }
  },[])

  return (
  <div>
    <div>FIVE</div>
    <div>Clipboard</div>
    <div>{clipb}</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}


function getLocation(callb){
  navigator.geolocation.getCurrentPosition(callb)
}

function Six({nextLevel}){

  const [loc,setLoc] = React.useState()

  function locButton(){
    getLocation((data)=>{
      setLoc({
        lat: data.coords.latitude,
        long: data.coords.longitude,
        alt: data.coords.altitude,
        accur: data.coords.accuracy
      })
    })
  }

  return (
  <div>
    <div>SIX</div>
    <div>{JSON.stringify(loc)}</div>
    <button onClick={locButton} >Get location</button>
    <button onClick={nextLevel}>Next</button>
  </div>)
}

function useScreenOrientation(callback){
  window.screen.orientation.addEventListener('change', callback)
}

function Seven({nextLevel}){
  const [orient,setOrient] = React.useState(window.screen.orientation.type)
  function orientationChange(ev){
    setOrient(window.screen.orientation.type)
  }
  useScreenOrientation(orientationChange)

  return (
  <div>
    <div>SEVEN</div>
    <div>{orient}</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}

function Zero({nextLevel}){
  return (
  <div>
    <div>ZERO</div>
    <button onClick={nextLevel}>Next</button>
  </div>)
}

function Riddles(props){
  const [level,setLevel] = React.useState(0)

  
  function nextLevel(){
    setLevel(level+1)
  }
  

  if(level==0)          return <Zero nextLevel={nextLevel}/>
  else if(level==1)     return <One nextLevel={nextLevel}/>
  else if(level==2)     return <Two nextLevel={nextLevel}/>
  else if(level==3)     return <Three nextLevel={nextLevel}/>
  else if(level==4)     return <Four nextLevel={nextLevel}/>
  else if(level==5)     return <Five nextLevel={nextLevel}/>
  else if(level==6)     return <Six nextLevel={nextLevel}/>
  else if(level==7)     return <Seven nextLevel={nextLevel}/>
  
  return (<div>?</div>)
}

function App() {
  return (
    <>
      <Riddles>
        {/* <Pos></Pos> */}
        {/* <Mov></Mov> */}
      </Riddles>
    </>
  );
}

export default App;
