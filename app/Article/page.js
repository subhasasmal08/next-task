import React from 'react'

export default function Page() {
  return (
    <div> 
    <div className="main_content">
      <div className="main_content_subwrapper">
      <p className="main_content_header">  AS/SO</p>
      <p className="main_content_subheader">  Creative agency since 2006</p>
      <div className="buttons_wrapper">
          {/* <button onClick={()=> router.push("./services")} className="button_services">OUR SERVICES</button>
          <button onClick={()=> router.push("./contact")} className="button_hereus">HERE US NOW!</button> */}
        </div>
      </div>
      <p className="nav_data"> Articles page</p>
     </div>
    </div>
  )
}
