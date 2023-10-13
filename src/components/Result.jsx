import { React, useContext, useEffect, useState } from 'react'
import { Datacontext } from '../Context/Dataprovider'
function Result() {
      const { html, css, js } = useContext(Datacontext);
      const [src, setsrc] = useState('')

      const srcCode = `
            <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
            </html>
      `
      useEffect(() => {
            const timeout=setTimeout(() => {
                  setsrc(srcCode);
            }, 2000)
            return ()=>clearTimeout(timeout);
      }, [html, css, js])

      return (
            <div>
                  <div className=' p-1 text-blue-400 font-semibold text-center'>Output</div>
                  <iframe srcDoc={src} title="Output" sandbox="allow-scripts" height="500px" width="100%" />
            </div>
      )
}

export default Result