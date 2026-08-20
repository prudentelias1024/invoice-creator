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
    <div className='lg:pt-[10em] bg-gray-50 text-center flex flex-col'>
        <p className='text-4xl font-bold'>Pricing</p>
        <div className="prices flex flex-col pl-[1.75em] lg:flex-row lg:gap-[3.5em] lg:pl-[7.5em] pt-[5em]">
            {
                plans.map((plan,index) => {
                    if (index == 1) {   
                        return <Plan color='bg-[#d7e8b5]' features={plan.features} fee={plan.fee} name={plan.name} key={index}/>
                    } else if (index == 2) {
                         return <Plan color='bg-[#141414] text-white' features={plan.features} fee={plan.fee} name={plan.name} key={index}/>
                    } else {
                         return <Plan color='' features={plan.features} fee={plan.fee} name={plan.name} key={index}/>
                    }
                })
            }
            
            
        </div>
        
        </div>
  )
}

export default Pricing