import { features } from 'process'
import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


interface Plans  {
    name: string,
    fee: number,
    color:string,
    features: Array<String>
}

const Plan = (prices: Plans) => {
  return (
    <div className={prices.color+  ' flex flex-col  shadow-md text-left rounded-xl w-[20em] p-[2em] mb-[5em]' }>
        <p className="plan_name float-left font-bold">{prices.name  }</p>
        <div className="price_fee inline-flex ">  <p className='text-2xl font-extrabold'>${prices.fee}</p> <p className='text-sm mt-[.5em] ml-[.5em]'>/mo</p></div>
        <button className={
            prices.name == "Free" ?
            "border rounded-md font-bold py-[.75em] text-sm mt-[1em]":
            prices.name == 'Basic'?
            " rounded-md font-bold bg-[#203b14] text-white py-[.75em] text-sm mt-[1em]"
            :
            " rounded-md font-bold text-[#203b14] bg-white py-[.75em] text-sm mt-[1em]"
        }>Get started with {prices.name}</button>
      

        <div className='flex flex-col gap-[1em]'>
            <p className='text-sm mt-[3em] font-semibold'>{prices.name} plan includes</p>
            {
                prices.features.map((feature, idx) => {
                    if(idx == 0){
                        return  <div key={idx} className="inline-flex gap-[.25em]">
                <IoIosCheckmarkCircleOutline  className="text-[#959595]"/>
                <p className='text-sm ml-[1em] -mt-[.25em]'>{feature}</p>
            </div>

                    } else {
                       return <div key={idx} className="inline-flex gap-[.25em]">
                <IoIosCheckmarkCircleOutline  className="text-[#959595]"/>
                <p className='text-sm -mt-[1.em] ml-[1.25em]'>{feature}</p>
            </div>

                    }
                })
            }
           
            

        </div>
    </div>
  )
}

export default Plan