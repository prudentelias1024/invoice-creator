import React from 'react'
import Plan from './Plan'



const plans = [
   {

       name: 'Free',
       fee: 0,
       features:    ["5 invoices / month", "File upload (.csv / .xlsx only)", "Fixed invoice template", "Default Logo Watermark", "PDF download only (no emailing)"]
    },
    
    {
 
        name: 'Basic',
        fee: 5,
        features:    ["5 invoices / month", "File upload (.csv / .xlsx only)", "Fixed invoice template", 
         "Upload logo", "Email notifications", "Email invoices to Client",
         "Watermark free", "PDF download only (no emailing)"]
     }, 
    {
 
        name: 'Business',
        fee: 10,
        features:    ["5 invoices / month", "File upload (.csv/.xlsx only)", "Fixed invoice template",
            "Upload logo", 
            "Email notifications",
            "Email invoices to Client",
            "Watermark free", 
            "PDF download only  + emailing)",
            "Advanced analytics", 
            "Multi-user access",
            "Bulk invoice automation",
            "Client management"
        ]
     }
]

const Pricing = () => {
  return (
    <div className='lg:pt-[10em] text-center flex flex-col'>
        <p className='text-4xl font-bold'>Pricing</p>
        <div className="prices flex flex-row lg:gap-[3.5em] lg:pl-[7.5em] pt-[5em]">
            {
                plans.map((plan,index) => {
                    return <Plan features={plan.features} fee={plan.fee} name={plan.name} key={index}/>
                })
            }
            
            
        </div>
        
        </div>
  )
}

export default Pricing