import { useState } from "react"

export default function Accordian(){
    const[section1Clicked,setSection1Clicked]=useState<boolean>(false)
    const[section2Clicked,setSection2Clicked]=useState<boolean>(false)
    return (
     
     <div className="h-[707px] w-full bg-black p-2">
     <div className="h-max w-[600px] font-medium text-black bg-red-500  p-2 my-2 mx-9" >
      <div className="flex justify-between">
      <span className="p-2 m-2">Click here</span>
      <span className="p-2  ml-2 cursor-pointer text-2xl" onClick={()=>setSection1Clicked(!section1Clicked)}> {section1Clicked ? "-" : "+"}</span>
      </div>
      {section1Clicked && (
        <p>You have clicked</p>
      )}
     </div>
     <div className="h-max w-[600px] font-medium text-black bg-red-500  p-2 my-2 mx-9" >
      <div className="flex justify-between">
      <span className="p-2 m-2">Click here</span>
      <span className="p-2  ml-2 cursor-pointer text-2xl" onClick={()=>setSection2Clicked(!section2Clicked)}> {section2Clicked ? "-" : "+"}</span>
      </div>
      {section2Clicked && (
        <p>You have clicked</p>
      )}
     </div>
     </div>
    
    )
}