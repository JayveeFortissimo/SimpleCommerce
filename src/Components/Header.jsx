import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import Main from '../Provider/Main.js'

const Header = () => {

  const {functionality} = useContext(Main);


  return (
    <header className='min-h-20 flex justify-center items-center border-b border-slate-600 font-google'>
        <nav className='min-h-10 min-w-full  flex justify-between items-center px-12'>
             
             <div className='flex items-center gap-6 xs:m'>
             <h1 className='text-2xl'>E-<span style={{color:"tomato"}}>Commerce</span></h1>
             <span>
              <input 
              type="text" 
               placeholder='Search'  
             className='py-1 px-3 border border-slate-600'
            onKeyUp={(e)=> functionality.setKeyUp(e.target.value)}
                     />
                     
                     </span>
                </div>
             
             <div className=''>
             <FaCartShopping size={30} style={{cursor:"pointer"}} onClick={()=> functionality.setModal(elements => !elements)}/>
             </div>
        </nav>
    </header>
  )
}

export default Header