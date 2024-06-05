import {Row , Col } from 'react-bootstrap'
import Productitem from '../Productitem'
import {  productlist } from '../data/item'
function Shop ()
{
 return( 
   <div>
    
    <Row  xs={1}   md={4}   className='g-4'>
     {productlist.map((item)=>(
    <Col align = 'center'  key={item.id}>
     
    <Productitem  product={item}></Productitem>
    
    </Col>
     ))}
       
    </Row>
    </div> 
 
    )

}

export default Shop 