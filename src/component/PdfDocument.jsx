import IsError from "./IsError"
import { Document, Page } from 'react-pdf';

const PdfDocument = ({page ,onDocumentLoad,windowWidth}) =>(
    <Document   
       error={IsError} 
       file={`images/Catalogue.pdf`}
       onLoadSuccess={onDocumentLoad}
       >
      <div  className='flex flex-col gap-5 py-2'>
       { Array.from({length:page}, (_ , index)=>(
         <div  key={index}>
         <Page    pageNumber={index + 1}  width={windowWidth > 850 ? 850 : windowWidth > 500 && windowWidth < 850 ? 500 : 345 } />
        </div>
        ))} 
      </div>
      </Document>
)

export default PdfDocument