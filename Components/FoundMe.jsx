import React from 'react'
import bouba from '@assets/images/bouba.png';
import inst from '@assets/images/inst.png';
import faceb from '@assets/images/faceb.png';
import link from '@assets/images/link.png';
import what from '@assets/images/what.png'; 
const rectMe=[
    {
       profile:bouba, 
       nameprofile:"Boubacar Bah",
       name:"@bouba_bah224",
       reseau:"Instagram",
       logo:inst,
       href:"https://www.instagram.com/bouba_bah224/"
    },
    {
       profile:bouba, 
       nameprofile:"Boubacar Bah",
       name:"@bouba_bah224",
       reseau:"Linkedin",
       logo:link,
       href:"#"
    },
    {
       profile:bouba, 
       nameprofile:"Bouba Bah",
       name:"@bouba_bah224",
       reseau:"Facebook",
       logo:faceb,
       href:"https://www.facebook.com/"
    },
    {
       profile:bouba, 
       nameprofile:"Boubacar Bah",
       name:"+212 695 632 657",
       reseau:"Whatsapp",
       logo:what,
       href:"#"
    },
]
 
const FoundMe = () => {
  return (
    <section id='contact' className='my-10 relative flex flex-col space-y-7'>
        <h1 className='text-2xl font-bold text-center'>
            Let's <span className='text-[#ed072a]'>Talk</span>
        </h1>
        <div className='w-full flex flex-wrap gap-4 cursor-pointer'>
            {
                rectMe.map((item,index)=>(
                    <div key={index} className='lg:w-[500px] w-[350px] bg-[#53252c71] rounded-sm shadow-xl p-4 flex flex-col'>
                      <div className='ml-14 bg-[#091d8d1d] rounded-4xl p-2 items-start flex w-24 '>
                          <p className='text-sm text-center'>{item.reseau}</p>
                      </div>
                        <div className='flex items-center gap-2 w-full relative'>
                            <div className='w-20 h-20 p-2 rounded-full border bg-[#091d8d1d] ' >
                                <img src={item.profile} alt='profile' className='w-full h-full object-cover rounded-full'/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h1 className='text-xl font-semibold'>{item.nameprofile}</h1>
                                <p className='text-xs'>{item.name}</p>
                            </div>
                            <div className='absolute bottom-0 right-0 flex items-center gap-2 hover:scale-110 transition-all duration-300'>
                                <a href={item.href}>
                                    <img src={item.logo} alt='logo' className='w-8 h-8'/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
        
    </section>
  )
}

export default FoundMe