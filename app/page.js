// import commonStyle from "../styles/common.module.css"


export default function HomePage() {

    return <div> 
      <div className="main_content">
        <div className="main_content_subwrapper">
        <p className="main_content_header">  AS/SO</p>
        <p className="main_content_subheader">  Creative agency since 2006</p>
        <div className="buttons_wrapper">
            {/* <button onClick={()=> router.push("./services")} className="button_services">OUR SERVICES</button>
            <button onClick={()=> router.push("./contact")} className="button_hereus">HERE US NOW!</button> */}
          </div>
        </div>
        <p className="nav_data"> Home page</p>
       </div>
      </div>;
  }
  