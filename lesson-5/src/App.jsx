import { useState, useRef, useEffect } from "react";
import {Header, Footer, CardApi} from '@component'

const App = () => {
  const [count, setCount] = useState([]);
  useEffect(() =>{
      fetch("https://fakestoreapi.com/products")
       .then(res => res.json())
       .then(data => setCount(data))
  }, []);

  
  return (
    <>
        <Header/>    

        <main>
            <CardApi data={count}/>
        </main>  
    </>
  );
};

export default App;