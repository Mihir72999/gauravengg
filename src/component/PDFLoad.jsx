import {pdfjs} from 'react-pdf';
import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/src/Page/TextLayer.css'
import { useCallback, useEffect, useState } from 'react';
import IsLoading from './IsLoading';
import TempTextComp from './TempTextComp';
import PdfDocument from './PdfDocument';



export default function PDFLoad ()  {
    const [isloading , setIsLoading] = useState(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);    
    const [page ,setPage] = useState(null) 
  
    ////////////
   const onDocumentLoad = ({numPages}) =>{
    setPage(numPages)
   }
  
   // Handle window resize
   const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    return true
  },[]);
  
    useEffect(()=>{
     ////////////////////
     pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  
     window.addEventListener('resize', handleResize);

     ////////////////////
     const time = setTimeout(()=>setIsLoading(false) , 1500)
        return ()=>{ 
          clearTimeout(time);
          window.removeEventListener('resize', handleResize);
        }      
      },[handleResize])
    

      ///////////////////
      if(isloading) return <IsLoading />    
      
  
      //////////////////
      return <div className={` animate-gsapanimation  px-1 md:px-1 lg:px-0 flex flex-col items-center justify-center min-h-screen`}>
      <hader className='scroll-text flex  mt-1 text-gray-800 bg-pista py-2  px-3 lg:px-0 tracking-tight  items-center text-xl md:text-2xl lg:text-5xl leading-8 md:leading-10 lg:leading-[60px] '>
       <TempTextComp />
      </hader>
      <main>
      <section className='flex justify-center'>
      <PdfDocument
       page={page}
       onDocumentLoad={onDocumentLoad}
       windowWidth={windowWidth}      
      />
       </section>
    </main>
    </div>
    
}
       
  
