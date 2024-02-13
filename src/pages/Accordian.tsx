import { useState } from "react"

export default function Accordian(){
    const[section1Clicked,setSection1Clicked]=useState<boolean>(false)
    const[section2Clicked,setSection2Clicked]=useState<boolean>(false)
    const[section3,setSection3]=useState<boolean>(false)
    const[section4,setSection4]=useState<boolean>(false)
    const[section5,setSection5]=useState<boolean>(false)

    function openCollapsable(type:Number){
      console.log(typeof type)
      switch(type){
        case 3:{
                  if(section3){
                    setSection3(false)
                  }else{
                    setSection3(true)
                    setSection4(false)
                    setSection5(false)
                  }
                  
                  break;
        }
        case 4:{
                  if(section4){
                    setSection4(false)
                  }else{
                    setSection3(false)
                    setSection4(true)
                    setSection5(false)
                  }
                  break;
        }
    default:{
                if(section5){
                  setSection5(false)
                }else{
                  setSection3(false)
                  setSection4(false)
                  setSection5(true)
                }
                break;
          }
      }
    }
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
        <p >You have clicked</p>
      )}
     </div>
     <p className="font-bold text-2xl text-green-600 mt-10">Collapsable Accordian</p>
     <div className="h-max w-[600px] font-medium text-black bg-green-500  p-2 m-10" >
      <div className="flex justify-between">
      <span className="p-2 m-2">Click here collapsable1</span>
      <span className="p-2  ml-2 cursor-pointer text-2xl" onClick={()=>openCollapsable(3)}> {section3 ? "-" : "+"}</span>
      </div>
      {section3 && (
        <p>collapsable 1</p>
      )}
      <div className="flex justify-between">
      <span className="p-2 m-2">Click here collapsable2</span>
      <span className="p-2  ml-2 cursor-pointer text-2xl" onClick={()=>openCollapsable(4)}> {section4 ? "-" : "+"}</span>
      </div>
      {section4 && (
        <p>collapsable 2</p>
      )}
      <div className="flex justify-between">
      <span className="p-2 m-2">Click here collapsable3</span>
      <span className="p-2  ml-2 cursor-pointer text-2xl" onClick={()=>openCollapsable(5)}> {section5 ? "-" : "+"}</span>
      </div>
      {section5 && (
        <p>collapsable 3</p>
      )}
     </div>
     </div>
    
    )
}