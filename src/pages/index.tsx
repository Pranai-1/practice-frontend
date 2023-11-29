import { useRouter } from "next/router"

export default function Home() {
  const router=useRouter()
  return (
<div className="h-[707px] w-full bg-black p-2 flex justify-center items-center rounded-xl">
<p className="h-max w-max p-2 m-2 bg-blue-500 text-red-700 font-medium text-xl rounded-lg cursor-pointer" onClick={()=>router.push("/Accordian")}>Accordian</p>
<p className="h-max w-max p-2 m-2 bg-blue-500 text-red-700 font-medium text-xl rounded-lg cursor-pointer" onClick={()=>router.push("/Session")}>Session</p>
<p className="h-max w-max p-2 m-2 bg-blue-500 text-red-700 font-medium text-xl rounded-lg cursor-pointer" onClick={()=>router.push("/login")}>Login</p>
</div>
  
  )
}
