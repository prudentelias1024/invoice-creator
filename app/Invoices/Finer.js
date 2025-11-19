
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const finerInvoice = (headers,docu) => {
    const doc = new jsPDF();
     // --- HEADER ---
      doc.setFontSize(30);
      const pagewidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      doc.text("Invoice", 13, 15);
     
      
    
    
      doc.setFontSize(10);
      doc.text("Billed to:", 14, 28);
      doc.text("lorem ipsum LTD:", 14, 34);
      doc.text("34, Campbell Street,Lagos State", 14, 40);
     
      doc.setFontSize(10);
      doc.text("Billed From:",  140, 28);
      doc.text("lorem ipsum LTD:", 140, 34);
      doc.text("34, Campbell Street,Lagos State",  140, 40);
     
    
      // --- AUTOTABLE ---
      autoTable(doc, {
        head: [headers],
        theme: 'plain',
        body: docu,
        startY: 45,
        styles: {
          fontSize: 10,
          halign: "left",
        },
        
        headStyles: {
    
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