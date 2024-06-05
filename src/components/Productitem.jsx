import { Card , Button , Col , Row , Form} from 'react-bootstrap'
import { useContext } from 'react'
import { CardContext } from '../context/CardContext'

function Productitem ({product}) {
   
     const cart = useContext(CardContext)
     const number = cart.numbers(product.id)

    return(
    <Card > 
   <Card.Body className='back'>
    <Card.Img  variant='top' src={product.image} height='200px' style={{objectFit : 'cover'}}  ></Card.Img>
    <Card.Title align = 'right' className='text-light  pt-4'>{product.title} </Card.Title>
    <Card.Text align = 'right' className='text-light ' dir='rtl'> {product.pricesh} تومان </Card.Text>
    {number > 0  ? (
        <>
        <Form >
            <Form.Label className='text-light'> 
             تعداد : {number}
            </Form.Label>
            <Row>
           <Col>
           
               <Button  onClick={()=> cart.addItem(product.id)}   sm='6' variant='btn btn-light'  className=' mx-1 ' >+</Button>
               <Button onClick={()=> cart.remove(product.id)}  sm='6' variant='btn btn-light'  className=' mx-1 '>-</Button>
               <Button onClick={()=> cart.delet(product.id)}   
               variant='btn btn-outline-secondary'  className='my-2 text-white mx-3' > حذف </Button> 
           </Col>
            
           </Row>
        </Form>
       
        </>
    )
     :(
    <Button onClick={()=> cart.addItem(product.id)} variant='btn btn-outline-secondary' className='text-white' >
         افزودن به سبد خرید</Button>) }
   </Card.Body> 
    </Card>

    )

}

export default Productitem