import {React,createContext,useState} from 'react'
export const Datacontext=createContext();
function Dataprovider({children}) {
   const [html, sethtml] = useState('');
   const [css, setcss] = useState('');
   const [js, setjs] = useState('');
  return (
    <Datacontext.Provider
       value={{ html,setcss,sethtml,setjs,css,js }}
    >
      {children}
    </Datacontext.Provider>
  )
}

export default Dataprovider;