import { Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf';
import './App.css';
import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/src/Page/TextLayer.css'
import { useEffect } from 'react';
import { pages } from './constant';
import IsLoading from './component/IsLoading';
import IsError from './component/IsError';

function App() {
 console.log(process.env.RENDER_DISCOVERY_SERVICE)
  useEffect(()=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  },[])
     
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
    <main>
      <article>
      <Document error={IsError} loading={IsLoading} file={`images/Catalogue.pdf`}>
      <div className='flex flex-col gap-5 py-5'>
       {pages.map((page)=>(
        <div key={page}>
         <Page   pageNumber={page}  width={window.innerWidth > 500 ? 850 : 350} />
        </div>
          
        ))} 
      </div>
      </Document>
      </article>
    </main>
    </div>

  );
}

export default App;
