import { useContext } from "react";
import { getProductData } from "../data/item";
import { CardContext } from "../../context/CardContext";
import { Button, Card } from "react-bootstrap";
function Navproduct({id , quantity})
{
    const cart = useContext(CardContext)

    const  productme = getProductData(id)
    
    return(
    
        <>
          <p> {productme.title} </p>
          <p>تعداد :{quantity}</p>
          <p> قیمت:{quantity * productme.price}</p>
           <Button size="sm" className="mb-5 text-white" variant="btn btn-outline-secondary"
            onClick={()=> cart.delet(id)}> حذف
           </Button>
        </>
    )



}


export default Navproduct