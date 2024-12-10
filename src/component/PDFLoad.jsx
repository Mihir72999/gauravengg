import { Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf';
import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/src/Page/TextLayer.css'
import { useEffect, useState } from 'react';
import IsLoading from './IsLoading';
import IsError from './IsError';



const PDFLoad = () => {
    const [isloading , setIsLoading] = useState(true)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);    
    const [page ,setPage] = useState(null) 
  
    ////////////
   const onDocumentLoad = ({numPages}) =>{
    setPage(numPages)
   }
  
  
    useEffect(()=>{
     ////////////////////
     pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

     ////////////////////
     const time = setTimeout(()=>setIsLoading(false) , 1500)
        return ()=>{ 
          clearTimeout(time);
          window.removeEventListener('resize', handleResize);
        }    
      },[])
    

      ///////////////////
      if(isloading) return <IsLoading />    
      
  
      //////////////////
      return <div className={` animate-gsapanimation  px-1 md:px-1 lg:px-0 flex flex-col items-center justify-center min-h-screen`}>
    <main>
      <section>
      <hader className='flex justify-center mt-1 text-gray-800 bg-pista py-2  px-3 lg:px-0 tracking-tight  items-center text-xl md:text-2xl lg:text-5xl leading-8 md:leading-10 lg:leading-[60px] '>
      <h1 className=' font-700'>This is temporary webpage, <br/> 
      Website under maintenance & 
      upgrade
      </h1>
    </hader>
      <Document   
       error={IsError} 
       file={`images/Catalogue.pdf`}
       onLoadSuccess={onDocumentLoad}
       >
      <div  className='flex flex-col gap-5 py-2'>
       { Array.from({length:page}, (_ , index)=>(
         <div  key={index}>
         <Page    pageNumber={index + 1}  width={windowWidth > 500 ? 850 : 390} />
        </div>
        ))} 
      </div>
      </Document>
       </section>
    </main>
    </div>
    
}
       
            
          

export default PDFLoad
