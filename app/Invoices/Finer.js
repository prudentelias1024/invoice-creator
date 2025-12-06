
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import thiccboi from './thiccboi.js'

export const finerInvoice = (headers,docu) => {
   
    const doc = new jsPDF();
    doc.addFileToVFS("thiccboi.ttf", thiccboi);
    doc.addFont("thiccboi.ttf", "thiccboi", "normal");
    doc.setFont("thiccboi");
     // --- HEADER ---
      doc.setFontSize(30);
    doc.setLineHeightFactor(1.5)
      const pagewidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
   
      // console.log(base64Image)
      // if(base64Image !== undefined || base64Image !== ''){

      //   doc.addImage(base64Image, 'PNG', 13, 8, 25,25)
      // }

      //Company heder 
    doc.setTextColor("purple")
    doc.setFontSize(20)
   
    doc.text('EDACARE',(pagewidth/2 - 10), 20)
    doc.setFontSize(10)
    doc.setTextColor("black")
    doc.text("34, Campbell Street,Lagos State", (pagewidth/2 -20), 27);
    doc.text("Tel: 09077096480, 09030652780", ((pagewidth/2) -20), 33 );
    
   
    // doc.text("Invoice", 13, 40);
    
      
    
    //Billing addresss
      doc.setFontSize(10);
      doc.text("Billed to:", 14, 50);
      doc.text('Extensionz', 30,50)
      doc.text("Billing Address:", 14 , 56);
      doc.text("34, Campbell Street,Lagos State", 40, 56);
      doc.text("Billing Date:", 14 , 63);
      doc.text(new Date().toLocaleDateString(), 35, 63);
     
     // doc.setFontSize(10);
     // doc.text("Billed From:",  140, 50);
     // doc.text("lorem ipsum LTD:", 140, 56);
     // doc.text("34, Campbell Street,Lagos State",  140, 62);
     
    
      // --- AUTOTABLE ---
      autoTable(doc, {
        head: [headers],
        theme: 'plain',
        body: docu,

        startY: 68,
        styles: {
          fontSize: 10,
          halign: "left",
          font: 'thiccboi',
          cellWidth: 'wrap'
        },
        tableWidth: 'wrap',
        
        headStyles: {
          font: 'thiccboi', 
          fillColor: [204,204,204], // Purple header
          textColor: 255,
        },
      });
    
      // --- FOOTER ---

    //   doc.line(0,pageHeight-30)
      
      doc.setFontSize(10);
      doc.text("Date : "+ new Date().toLocaleDateString() , 14, pageHeight - 15);
    
      doc.text("Powered by Invoicely", 14, pageHeight - 10);
    
      // --- SAVE PDF ---
     return doc
}