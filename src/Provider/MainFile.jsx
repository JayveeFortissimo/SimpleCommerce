import { useRef, useState } from 'react';
import Main from './Main.js';

const MainFile = ({children}) => {

  const [keys,setKeyUp] = useState("")
  const [modal,setModal] = useState(false); 
  const [cart,setCart] = useState([]);

  function pushCart(items){
    setCart(elementd => [...elementd, items])
  }


  const deletes = (values) =>{
     setCart(ids =>{
      return ids.filter(idx => idx.id != values)
     })
  }

// function for add quantity

  const functionality = {
    pushCart,
    cart,
    modal,
    setModal,
    setCart,
    setKeyUp,
    keys,
    deletes
  }

  console.log(keys);
console.log(cart)
  return <>
    <Main.Provider value={{functionality}}>
    {children}
    </Main.Provider>
  </>
}

export default MainFile