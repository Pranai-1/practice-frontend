import { signOut, useSession } from "next-auth/react"
import { GetServerSideProps } from "next/types"
import { getServerAuthSession } from "./api/auth/authoptions";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
   
    return {
      props: {
       
      },
    };
  };
  

export default function Home(){
    const {data}=useSession()
    let email=null
    if(data)
     email=data.user?.email
    return(
        <div className="h-[707px] w-full bg-black overflow-auto">
          <p className="p-2 font-bold text-center text-white text-xl">Welcome {email}!</p>
          <button className="ml-[1400px] bg-blue-600 text-black rounded-lg p-2" onClick={()=> void signOut()}>Logout</button>
          <div className="p-2 mt-10  h-max w-full flex justify-center items-center">
          <ul className="bg-indigo-200 p-2 m-10 rounded-lg ">
            <li className=" bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">
                item1
                <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p>
                </li>
            <li className="bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item2
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p>
            </li>
            <li className=" bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item3
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p></li>
            <li className="bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item4
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p></li>
            <li className=" bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item5
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p></li>
            <li className="bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item6
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p></li>
            <li className=" bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item7
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p></li>
            <li className="bg-red-500 font-bold text-black text-xl p-2 rounded-lg mb-2">item8
            <p className="bg-blue text-green-500 p-2 mt-1 font-normal text-base bg-blue-700 rounded-lg">Add to cart</p></li>
         </ul>
          </div>
        </div>
    )
}