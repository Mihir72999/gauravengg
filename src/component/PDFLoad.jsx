import { Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf';
import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/src/Page/TextLayer.css'
import { useEffect, useState } from 'react';
import { pages } from '../constant';
import IsLoading from './IsLoading';
import IsError from './IsError';
import gsap from 'gsap';

const PDFLoad = () => {
    const [isloading , setIsLoading] = useState(true)
    
    ////////////////////
    useEffect(()=>{
     pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      
     /////////////////////
     gsap.from('#box', {
        x:1000,
        duration:1,
       yoyo:true
    })
    
    gsap.to('#box', {
        x:0,
        duration:1,  
        ease:"power4.in",
        yoyo:true
    })
  


     ////////////////////
     const time = setTimeout(()=>setIsLoading(false) , 2000)
        return ()=> clearTimeout(time)     
      },[isloading])
    

      ///////////////////
      if(isloading) return <IsLoading />    
      const loadingText = ''
  
  
      //////////////////
      return (
    <div  id="box" className=" flex flex-col items-center justify-center min-h-screen ">
    <main>
      <article  >
      <Document   error={IsError} loading={loadingText}  file={`images/Catalogue.pdf`}>
      <div  className='box-0 flex flex-col gap-5 py-5'>
       {pages.map((page , index)=>(
         <div  key={index}>
         <Page    pageNumber={page}  width={window.innerWidth > 500 ? 850 : 350} />
        </div>
        ))} 
      </div>
      </Document>
       </article>
    </main>
    </div>
    )
}
       
            
          

export default PDFLoad
