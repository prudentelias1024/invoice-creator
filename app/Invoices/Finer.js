
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import thiccboi from './thiccboi.js'

export const finerInvoice = (headers,docu,base64Image) => {
   
    const doc = new jsPDF();
    doc.addFileToVFS("thiccboi.ttf", thiccboi);
    doc.addFont("thiccboi.ttf", "thiccboi", "normal");
    doc.setFont("thiccboi");
     // --- HEADER ---
      doc.setFontSize(30);
      const pagewidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      doc.addImage(base64Image, 'PNG', 13, 8, 25,25)
   
      doc.text("Invoice", 13, 40);
     
      
    
    
      doc.setFontSize(10);
      doc.text("Billed to:", 14, 50);
      doc.text("lorem ipsum LTD:", 14, 56);
      doc.text("34, Campbell Street,Lagos State", 14, 62);
     
      doc.setFontSize(10);
      doc.text("Billed From:",  140, 50);
      doc.text("lorem ipsum LTD:", 140, 56);
      doc.text("34, Campbell Street,Lagos State",  140, 62);
     
    
      // --- AUTOTABLE ---
      autoTable(doc, {
        head: [headers],
        theme: 'plain',
        body: docu,
        startY: 65,
        styles: {
          fontSize: 10,
          halign: "left",
          font: 'thiccboi'
        },
        
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