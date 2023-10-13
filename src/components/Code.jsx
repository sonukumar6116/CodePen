import React, { useContext } from 'react'
import Editor from './Editor'
import {Datacontext} from "../Context/Dataprovider";

function Code() {
  const{html,sethtml,css,setcss,js,setjs}=useContext(Datacontext);
  return (
    <>
      <div className='flex bg-[#060606] p-1 border-b-8 border-black gap-1'>
      <Editor lang="HTML" icon="<>" color="#ff3c41" value={html} onChange={sethtml}/>
      <Editor lang="CSS" icon="*" color="#0ebeff" value={css} onChange={setcss}/>
      <Editor lang="JavaScript" icon="{}" color="#fcd000" value={js} onChange={setjs}/>
      </div>
    </>
  )
}

export default Code