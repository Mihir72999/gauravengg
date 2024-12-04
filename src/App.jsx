import 'react-pdf/src/Page/AnnotationLayer.css';
import 'react-pdf/src/Page/TextLayer.css'
// import PDFLoad from './component/PDFLoad';
import React from 'react';
import IsLoading from './component/IsLoading';
const PDFLoad = React.lazy(() => import('./component/PDFLoad')); // Dynamic import

function App() {
  return(
    <React.Suspense fallback={<IsLoading/>}>
    <PDFLoad/>
    </React.Suspense>
    )
}
  

  


export default App;
