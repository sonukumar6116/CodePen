import {React,useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

function Editor({lang,icon,color,value,onChange}) {
      const [open,setopen]=useState(true);
      const handlechange=(editor,data,value)=>{
              onChange(value);
      }
      return (
            <div className='flex max-w-[33%] grow flex-col' style={open?null:{flex:0}}>
                  {/* upper box */}
                  <div className='flex justify-between w-full items-center bg-black'>
                        <div className="rounded-t p-1.5 font-semibold flex justify-center items-center bg-[#263238]">
                              <div className='h-5 w-5 rounded-sm mx-2 flex justify-center items-center' style={{backgroundColor:`${color}`}}>{icon}</div>
                              <div className='text-white'>{lang}</div>
                        </div>
                        <div>
                              <button className='bg-[#263238] rounded-sm mx-1 text-white' onClick={()=>setopen(prevState=>!prevState)}><KeyboardArrowDownIcon /></button>
                        </div>
                  </div>
                  {/* lower box */}
                  <CodeMirror 
                    value={value}
                    onBeforeChange={handlechange}
                    options={{
                        theme:'material',
                        lineNumbers:true
                    }}
                    className='controlled-editor'

                  />
            </div>
      )
}

export default Editor