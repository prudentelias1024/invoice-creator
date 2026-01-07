'use client'
import React, {useState, useEffect} from 'react'
import * as pdfjsLib from "../pdf.mjs";
// import pdfWorker from "../pdf.worker.min.mjs";
import { Fade  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { log } from 'console';

const spanStyle = {
  padding: '10px',
  background: '#efefef',
  color: '#000000'
  // padding: '10px',
  // borderRadius:' 5px',
  // fontSize: '20px',
  // color: 'white',
  // background: 'rgba(141, 174, 224, 0.5)',
  // textAlign: 'center',
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '160vh',
  marginTop: '1em',
  marginLeft: '5em'
  // display: 'flex',
  // aligntItems: 'center',
  // justifyContent: 'center',
  // backgroundSize: 'cover',
  // backgroundPosition: '50% 50%',
  // backgroundRepeat: 'no-repeat',
  // height: '100vh',
}

export default function PDFPreviewer({fileData }) {
  // pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(WorkerMessageHandler, import.meta.url).toString()
  let tempPdf =[]

  const [imgSrc, setImgSrc] = useState();
  const [pdfImages, setPdfImages] = useState([])
  const [imageUpdated, setImageUpdated] = useState(false)

const renderImage = async (pdf, pageNum, temp) => {
   console.log(pageNum)
    const page = await pdf.getPage(pageNum);

      // 3. Define how big the preview will be
      const viewport = page.getViewport({ scale: 20});

      // 4. Create an invisible canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // 5. Render  the PDF page onto the canvas
      await page.render({
        canvasContext: ctx,
        viewport: viewport,
      }).promise

      // 6. Convert canvas to PNG image URL
      const imageUrl = await canvas.toDataURL("image/png")
     
      temp.push(imageUrl)
      // 7. Save PNG URL in React state
     
     
    };
    
 const loadPDF = async(file_data) => {
      const pdf = await pdfjsLib.getDocument({ data: file_data }).promise
      const temp_img = []
      const no_of_pages = pdf.numPages
     
      for (let i = 1; i <= no_of_pages; i++) {
      
        await renderImage(pdf,i, temp_img);
      }

      setPdfImages(temp_img)
      setImageUpdated(true)
    }
  useEffect(() => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`; 
  loadPDF(fileData)
  console.log(pdfImages)
    // 1. Load the PDF from base64 or Uint8Array
  }, [fileData, imageUpdated]);

  return (
    <div className="w-full h-screen ml-[2em]">
      {/* {imgSrc !== ''  ?  */}
       <Fade easing='ease'>
         {pdfImages.length > 0 ? 
         
         pdfImages.map((slideImage, index)=> {
        
           return (<div key={index}>
             {/* <img src={slideImage} alt="Preview PDF" className="w-full h-full ml-[2em] pl-[6em] shadow " /> */}
               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
             
                <span style={spanStyle}>{"Page: "+ ++index}</span>
            </div>
             </div>)
})
         :'' 
         }  
        </Fade>
     
       
            {/* <div className=' w-[90%] h-screen border rounded-md bg-gray-200 animate-pulse border-gray-300 ml-[7em] mt-[2em]'>

             <svg
          className="w-10 h-10 text-gray-100 mx-auto mt-[30%] align-middle dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
    </div>

      } */}
    </div>
  );
}


