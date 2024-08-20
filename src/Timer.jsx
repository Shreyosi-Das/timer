import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [time,setTime] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>setTime(time + 1),1000)
        console.log("Adding new interval",time)
        return function (){
            clearInterval(timer)
            console.log("clearing old interval",time)
        }
    },[time])
  return (
    <div>Current time is {time}</div>
  )
}

export default Timer