import { Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf';
import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/src/Page/TextLayer.css'
import { useEffect, useState } from 'react';
import { pages } from '../constant';
import IsLoading from './IsLoading';
import IsError from './IsError';

const PDFLoad = () => {
    const [isloading , setIsLoading] = useState(true)
    
    useEffect(()=>{
     ////////////////////
     pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  
     ////////////////////
     const time = setTimeout(()=>setIsLoading(false) , 2000)
        return ()=> clearTimeout(time)     
      },[isloading])
    

      ///////////////////
      if(isloading) return <IsLoading />    
      const loadingText = ()=>{
        console.log('loading')
      }
  
  
      //////////////////
      return (
    <div  id="box" className="animate-gsapanimation overflow-x-hidden flex flex-col items-center justify-center min-h-screen">
    <main>
      <article  >
      <div className='flex justify-center mt-1 text-gray-800 bg-pista py-2  items-center text-5xl leading-[70px] font-Phetsarath font-700 tracking-wide'>
      <h1 className=''>This temporary webpage, <br/> 
      Website under maintenance & 
      upgrad
      </h1>
    </div>
      
      <Document   error={IsError} loading={loadingText}  file={`images/Catalogue.pdf`}>
      <div  className='box-0  flex flex-col gap-5 py-2'>
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
