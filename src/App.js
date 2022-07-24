import React from "react";
import Header from "./Header";
import Produtos from "./Produtos"
import Home from "./Home"

function App() {
const {pathname} = window.location

let Pagina;

if(pathname === '/'){
  Pagina = Home
} else{
  Pagina = Produtos
}

return (
    <div>
      <Header cor='orange' display='flex' lStyle='none' margin='2rem'/>
      <Pagina />
    </div>
  );
}

export default App;
