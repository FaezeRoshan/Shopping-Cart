import {Navbar  , Button , Modal} from 'react-bootstrap'
import {BsCart2} from 'react-icons/bs'
import {useState , useContext} from 'react'
import { CardContext } from '../context/CardContext' 
import Navproduct from './page/Navproduct'

function Nav ()
{    

  
    const cart = useContext(CardContext)
    const count = cart.items.reduce((sum , product) => sum + product.quantity , 0)

    const [showme , setShow] = useState(false)

    const handleShow = () =>
    {
        setShow(true)
    }

    const handleClose = () =>
    {
        setShow(false)
    }

    async function checkout(){

      const respose = await fetch('http://localhost:3000/api', 
    {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({items: cart.items}),
    })

    const data = await respose.json()
     if(data.url)
     {
        window.location.assign(data.url)
     }
    }


    return(
        <>
     <Navbar  className='border-bottom border-secondary'>
      <Navbar.Collapse className='justify-content-end'>

         <Button onClick={handleShow} variant='btn btn-outline-secondary' 
         className='text-white'> ({count})<BsCart2></BsCart2> سبد خرید </Button>
          
        </Navbar.Collapse>
     </Navbar>

    <Modal className='text-light'  show = {showme} onHide={handleClose} dir='rtl'  >
   <Modal.Header className='back'  >
    
    <Modal.Title> سبد خرید </Modal.Title>
    <Modal.Body>  
    { count > 0 ? (
           <>
           <h3 className='mb-4'> سبد خرید  </h3>
           {cart.items.map((item) => (

            <Navproduct key={item.id} id={item.id} quantity={item.quantity}> </Navproduct>
           ) )}
         <h3>قیمت کل: {cart.total()}</h3>
           </>) :

           (<h4> سبد خرید خالی است</h4>)
           
        }
         <Button className='mt-4' variant='btn btn-light' onClick={checkout}> ثبت سفارش</Button>
         <Button onClick={handleClose} variant="btn btn-outline-secondary"
          className='mt-4  mx-3 text-light'>close</Button>
         
         </Modal.Body>
   </Modal.Header>
    </Modal>

     </>
    )
}

export default Nav

