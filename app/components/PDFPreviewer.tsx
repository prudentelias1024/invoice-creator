'use client'
import React, {useState, useEffect} from 'react'
import * as pdfjsLib from "pdfjs-dist";

export default function PDFPreviewer({fileData}) {

pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
  // pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(WorkerMessageHandler, import.meta.url).toString()

  const [imgSrc, setImgSrc] = useState("");
const renderImage = async () => {

      // 1. Load the PDF from base64 or Uint8Array
      const pdf = await pdfjsLib.getDocument({ data: fileData }).promise;

      // 2. Get first page
      const page = await pdf.getPage(1);

      // 3. Define how big the preview will be
      const viewport = page.getViewport({ scale: 2 });

      // 4. Create an invisible canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // 5. Render the PDF page onto the canvas
      await page.render({
        canvasContext: ctx,
        viewport: viewport,
      }).promise;

      // 6. Convert canvas to PNG image URL
      const imageUrl = canvas.toDataURL("image/png");
      console.log(imageUrl)

      // 7. Save PNG URL in React state
      setImgSrc(imageUrl);
    };

  useEffect(() => {
    console.log(imgSrc)
    console.log('fileData',fileData)
    renderImage();
  }, []);

  return (
    <div className="w-full">
      {imgSrc ? (
        <img src={imgSrc} alt="PDF preview" className="w-full h-screen shadow " />
      ) : (
            <div className=' w-[90%] h-screen border rounded-md bg-gray-200 animate-pulse border-gray-300 ml-[7em] mt-[2em]'>

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

      )}
    </div>
  );
}


