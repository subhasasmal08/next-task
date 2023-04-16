// import commonStyle from "../styles/common.module.css"

"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const HomePage= () =>{
  const router = useRouter()

    return <div> 
      <div className="main_content">
        <div className="main_content_subwrapper">
        <p className="main_content_header">  AS/SO</p>
        <p className="main_content_subheader">  Creative agency since 2006</p>
        <div className="buttons_wrapper">
            <button onClick={()=> router.push("./Service")} className="button_services">OUR SERVICES</button>
            <button onClick={()=> router.push("./Contact")} className="button_hereus">HERE US NOW!</button>
          </div>
        </div>
        <p className="nav_data"> Contact page</p>
       </div>
      </div>;
  }
  export default HomePage
  