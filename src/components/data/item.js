const productlist =[
{
    id : '1',
    title : 'هنگ درام' ,
    price : '14e6',
    pricesh: '14,000,000',
    image :'images/hang-drum-eco-nitride.jpg' 
},
{
    id : '2',
    title : 'درامز',
    price : '46e6',
    pricesh: '46,000,000',
    image :'images/yamaha-dtx10k-x-electronic-drum-kit-real-wood-1.jpg' 
},
{
    id : '3',
    title : 'ملودیکا' ,
    price : '12e6',
    pricesh: '12,000,000',
    image :'images/preview-2-3-270x270.jpg' 
},

{
    id : '4',
    title : 'کالیمبا' ,
    price : '6e6',
    pricesh: '6,000,000',
    image :'images/VFM00C-KALIMBA-270x270.jpg' 
}


]

function getProductData(id){

  let productdata = productlist.find( (item)=> item.id === id )

  return productdata
}

export {getProductData , productlist}