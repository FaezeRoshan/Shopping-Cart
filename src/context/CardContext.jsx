import {createContext ,useState} from 'react'
import { getProductData } from '../component/data/item'
export const CardContext  = createContext(
    {
      items : [],
      numbers : () => {},
      addItem : () => {},
      remove : () => {}, 
      delet  : () => {},
      total : () => {}
    }
)

 export function Cardprovider({children}) {
    const [Cardproduct ,setCardproduct] = useState([])
    

    function numbers(id) {
      const quantity = Cardproduct.find( (item)=>item.id === id )?.quantity

      if(quantity === undefined){
        return 0 
      }
      return quantity
    }

    function addItem( id) {

        const number = numbers(id)

    if(number === 0 )
    {
        setCardproduct([...Cardproduct , { id : id , quantity : 1 }])
    }else 
    {
         setCardproduct(
            Cardproduct.map( (item)=> item.id === id  ? {...item , quantity : item.quantity +1 } : item) 
         )
    }

    }

    function delet(id) {
       
        setCardproduct(  (Cardproduct) =>
        Cardproduct.filter(  (item)=>{
            return item.id != id
        } )
        )
    }


    function remove(id) {
      
        const number = numbers(id)
        if(number === 1)
        {
            delet(id)
        }else {
            setCardproduct(
                Cardproduct.map( (item)=> item.id === id ? {...item, quantity : item.quantity -1} : item)
            )
        }

    }

    function total()
    {
      let  totalItem  = 0

      Cardproduct.map((item)=> {
        const products = getProductData(item.id)
         
        totalItem += products.price * item.quantity
      } )
      
      return totalItem
    }

const ContextValue = {
    
    items  : Cardproduct,
    numbers ,
    addItem ,
    remove , 
    delet  ,
    total ,
}
return (
   

  <CardContext.Provider  value={ContextValue}>

    {children}
  </CardContext.Provider>

)
}