import React from "react";
import Nav from "./component/Nav";
import {Container} from 'react-bootstrap'
import {Route , Routes} from 'react-router-dom'
import Shop from "./component/page/Shop";
import { Cardprovider } from "./context/CardContext";
import Success from "./component/page/Success";
function App ()
{
   return(

      <Cardprovider>
      <Container>
      <Nav />
      <Routes>
      <Route path="/"  element={<Shop  />}   />
      <Route path="/success"  element={<Success /> } />
      </Routes>
      </Container>
      </Cardprovider>
   )

}

export default App