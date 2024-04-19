import {Shoppping} from '../Provider/Datas.js';
import { useContext,useRef } from 'react';
import Main from '../Provider/Main.js';
import Swal from 'sweetalert2'

const Body = () => {

  const {functionality} = useContext(Main);

  const Reduce = [0];

  function AddQuantity(indexs,num){
  const Unique = functionality.cart.find(elements => elements.id === indexs);

  if(Unique){
    Unique.quantity += 1;
    const variables = [...functionality.cart];
    let ItemsQuantity = Unique.price + Unique.Totals;
    variables[num].Totals = ItemsQuantity;
 
    functionality.setCart([...variables])
    console.log(variables)
  }
  }

  //For Reduce the Quantity
  function SubtructQuantity(indexs,num){
  const Unique = functionality.cart.find(elements => elements.id === indexs);

  if(Unique && Unique.Totals >= 0){
    Unique.quantity -= 1;
    const variables = [...functionality.cart];
    let ItemsQuantity = Unique.Totals - Unique.price;
    variables[num].Totals = ItemsQuantity;

    functionality.setCart([...variables])
  }else{
   alert("Bwaka")
  }

  }

  return (
    <section className='min-h-screen px-44 flex flex-wrap justify-center items-center gap-10 font-google'>
   
   {
        functionality.modal &&
        <div className='fixed left-0 top-0 w-full h-full '>
           <div className='min-h-auto w-4/5  m-Modal bg-slate-100 scroll-px-5 scroll-py-5 py-5 px-10 rounded-lg text-xl'>
                  
                   <div className='min-h-10 flex justify-end'>
                      <button onClick={()=>functionality.setModal(false)}>X</button>
                   </div>

                        <div className='flex flex-col gap-6'>
                                    {
                                      functionality.cart.map((elements,index)=>{  
                                           Reduce.push(elements.Totals);
                                      
                                        return(
                                      
                                              <div key={elements.id} >

                                            <div className='flex justify-between items-center'>
                                                  {/*////For Pictures////?*/}
                                            <div className='flex items-center gap-4'>                                             
                                                <img src={elements.img} alt="" style={{height:"5rem"}}/>
                                                      <div>
                                                      <h1>{elements.name}</h1>
                                                      <h2>{elements.Totals}</h2>
                                                      </div>
                                                </div>

                                                <div>
                                                  <button onClick={()=> functionality.deletes(elements.id)} style={{width:"5rem",height:"2rem",borderRadius:"10px",backgroundColor:"orange",fontSize:"1rem"}}>Delete</button>
                                                </div>
                                                {/*////////For Buttons/////*/}
                                                <div className='flex gap-5'>
                                                  <button onClick={()=>{
                                                    AddQuantity(elements.id,index)
                                                  }}>+</button>
                                                  {elements.quantity}
                                                  <button onClick={()=>{
                                                    SubtructQuantity(elements.id,index)
                                                  }}>-</button>
                                                </div>

                                            </div>
                                            {/*///////////?For End of images//////*/}

                                            </div>   
                                                                                       
                                        )
                                      })
                                                                        
                                    }

                                    <div>
                                      <h1>Total: {Reduce.reduce((a,b) => a+b)}</h1>
                                    </div>
                   </div>
           </div>
        </div>
      }
        

        
   
    {  
     
       Shoppping.map((elemenets,index)=>{
         return(
          <div key={index} >
        {
           elemenets.name.toLowerCase().startsWith(functionality.keys) &&
          <div key={index} className='min-h-auto min-w-72 py-8 px-8 flex flex-col border border-slate-600 rounded-lg gap-2 text-xl'> 
            <img src={elemenets.img} alt="" style={{height:"10rem", width:'100%'}}/>
             <h1>Items: {elemenets.name}</h1>
             <h2>Prices: {elemenets.price}</h2>
             <h3>Categoty: {elemenets.category}</h3>
             <div>
              <button onClick={()=>{
                functionality.pushCart({name:elemenets.name,
                  price:elemenets.price,
                  category:elemenets.category,
                  id:elemenets.product_id,
                  img:elemenets.img,
                  quantity:elemenets.quantity,
                   Totals:elemenets.Total});

                   Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }}   style={{width:"100%",height:"2rem",borderRadius:"5px",backgroundColor:"orange",fontSize:"1rem"}} 
              >
                Add To Cart
                </button>
                
             </div>
          </div>
       }
          </div>
         )
       })


    }
  
    </section>
  )
}

export default Body